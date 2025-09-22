/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-08 01:37:38
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-23 01:29:24
 * @Description : GeomEditor 类
 */
import type { Map, MapBrowserEvent, View } from 'ol'
import Collection, { CollectionEvent } from 'ol/Collection'
import Feature from 'ol/Feature'
import BaseObject from 'ol/Object'
import { unByKey } from 'ol/Observable'
import type { Coordinate } from 'ol/coordinate'
import type { EventsKey } from 'ol/events'
import { type Extent, createEmpty, extend } from 'ol/extent'
import { GeoJSON, WKT } from 'ol/format'
import { Circle, type Geometry, type SimpleGeometry } from 'ol/geom'
import { circular } from 'ol/geom/Polygon'
import { Draw, Modify, Snap, Translate } from 'ol/interaction'
import type { DrawEvent } from 'ol/interaction/Draw'
import type { TranslateEvent } from 'ol/interaction/Translate'
import VectorLayer from 'ol/layer/Vector'
import { fromLonLat, toLonLat, transform } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import { getDistance } from 'ol/sphere'
import { Fill, Stroke, Style } from 'ol/style'
import CircleStyle from 'ol/style/Circle'
import type { StyleLike } from 'ol/style/Style'
import type { FlatStyle } from 'ol/style/flat'

import type { GeoJSON as GeoJSONT } from 'geojson'
import { debounce } from 'petite-utils'
import { shallowRef } from 'vue'

import {
  GeomEditorDeselectEvent,
  GeomEditorDrawEvent,
  GeomEditorEventType,
  GeomEditorModifyEvent,
  GeomEditorMoveEvent,
  GeomEditorSelectEvent,
} from './GeomEditorEvents'
import {
  type Button,
  type DeselectOptions,
  type ElementOf,
  type FeatureOptions,
  type FitOptions,
  type GeoType,
  type GeomEditorI,
  type GeometryData,
  type GeometryGeoJSON,
  type GeometryWKT,
  type Id,
  type ProjCode,
  type SelectModeOptions,
  type SelectOptions,
  buttons,
} from './GeomEditorI'
import { genId, getWKTType, isGeoJSON, isGeoJSONObj, isWKT, normalizePadding } from './utils'

//import type { GeometryFunction } from 'ol/style/Style'
const DEFAULT_ACTIONS = ['remove', 'modify', 'move', 'complete'] as const

const DEFAULT_GEOM_TYPES: GeoType[] = ['Point', 'LineString', 'Polygon', 'Circle']
// type ElementOf<T extends readonly unknown[]> = T[number]

type Action = (typeof DEFAULT_ACTIONS)[number]

const olBrandColor = getComputedStyle(document.documentElement).getPropertyValue('--ol-foreground-color') //?? '#00AAFF'

type GeomEditorOptions = {
  /**
   * 是否显示工具条
   *
   * 默认显示
   */
  showToolBar?: boolean
  /**
   * 想要绘制几何图形
   *
   * 默认 ['Point', 'LineString', 'Polygon', 'Circle']
   */
  drawTypes?: GeoType[]
  /**
   * 是否支持自由绘制。默认支持
   *
   * 只有 drawTypes 【线 - LineString】【面 - Polygon】才有意义
   */
  supportFreehand?: boolean
  /**
   * 其他操作
   *
   * 默认 ['remove', 'modify', 'move', 'complete']
   */
  actions?: Action[]
  /**
   * 删除所有时是否需要二次确认
   */
  // confirmOnRemoveAll?: Confirm | boolean
  /**
   * 矢量图层样式
   */
  layerStyle?: Style | StyleLike | FlatStyle
  /**
   * 图层类名，默认 ol-layer
   */
  className?: string
  /**
   * 选中的要素样式
   */
  selectedStyle?: StyleLike
}

const highlightStyle = new Style({
  fill: new Fill({ color: 'rgba(255,255,255,0.5)' }),
  stroke: new Stroke({
    width: 2.5,
    color: 'red',
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({ width: 2.5, color: 'red' }),
  }),
})

const defaultFit: FitOptions = {
  duration: 500,
  maxZoom: 14,
  padding: 100,
}
const canFreehandType: GeoType[] = ['LineString', 'Polygon'] as const

// 绘制图层的 zIndex 设置为一个很大的值（超过9亿），确保在最上层显示
const zIndex = +Math.floor(Number.MAX_SAFE_INTEGER / 1000_0000)

const ACTION_TITLE = {
  remove: 'remove geometry',
  move: 'move geometry',
  modify: 'modify geometry',
  complete: 'complete edit geometry',
}
class GeomEditor extends BaseObject implements GeomEditorI {
  #source: VectorSource<Geometry> = new VectorSource()
  #layer: VectorLayer<VectorSource<Geometry>> | null = null
  #selected = new Collection<Feature<Geometry>>([])
  readonly #map: Map | null = null
  readonly #view: View | null = null
  readonly #dataProj: ProjCode = 'EPSG:4326'
  readonly #mapProj: ProjCode = 'EPSG:3857'
  #modify = shallowRef<Modify>()
  #translate = shallowRef<Translate>()
  #draw = shallowRef<Draw>()
  #drawingType: GeoType = 'None'
  #drawEndOn: EventsKey | null = null
  #drawStartOn: EventsKey | null = null
  #selectOn: EventsKey | null = null
  #snap: Snap | null = null

  #boxSelectable = false
  #multiSelectable = true
  #singleSelectable = false
  #canFreehand = false

  protected supportFreehand: boolean = true
  protected showToolBar: boolean = true
  protected actions: Action[] = ['modify', 'move', 'remove', 'complete']
  protected drawTypes: GeoType[] = DEFAULT_GEOM_TYPES
  protected allButtons: Button[] = buttons
  protected sketchStyle: Style | StyleLike | FlatStyle | null = null
  protected selectedStyle: StyleLike = highlightStyle
  protected modifyingStyle: Style | StyleLike | FlatStyle | null | undefined = null
  protected toolBarContainer: HTMLElement | null = null
  protected enableModifier: boolean = false
  constructor(map: Map, options: GeomEditorOptions = {}) {
    super()
    this.#map = map
    this.#view = map.getView()
    this.#mapProj = this.#view.getProjection().getCode() as ProjCode
    this.#initOptions(options)
    this.#addLayer()
    this.#onSourceChange()
    this.#onSelectedChange()

    if (this.showToolBar) {
      // 渲染按钮
      this.render()
    }
    // 点击选中或者取消选中要素
    this.#selectOn = map.on('singleclick', this.#whenSingleClick.bind(this))
    // 设置鼠标样式
    const debounceOnPointerMove = debounce(this.#onPointerMove.bind(this), 50)
    map.on('pointermove', debounceOnPointerMove)
  }

  get source() {
    return this.#source
  }

  get layer() {
    return this.#layer
  }

  /*
   * @description 从 WKT 字符串添加要素
   */
  addFeatureFromWKT(wkt: string, id?: Id, projection: ProjCode | FeatureOptions = 'EPSG:4326'): boolean {
    if (!wkt || !isWKT(wkt)) return false
    if (id) {
      // 已经存在要素
      const hasFeature = this.#source.getFeatureById(id)
      if (hasFeature) return false
    }
    let feature
    if (typeof projection === 'string') {
      feature = new WKT().readFeature(wkt, {
        dataProjection: projection,
        featureProjection: this.#mapProj,
      })
    } else {
      const { style, ...projectionOptions } = projection
      feature = new WKT().readFeature(wkt, projectionOptions)
      style && feature.setStyle(style)
    }
    const type = getWKTType(wkt)
    feature.setId(id ?? genId(type ?? ''))
    this.#source.addFeature(feature)
    return true
  }

  addFeatureFromJSON(JSON: string | GeoJSONT, projection: ProjCode | FeatureOptions = 'EPSG:4326'): boolean {
    if (!JSON) return false
    let JSON_ = ''
    if (typeof JSON === 'object') {
      if (!isGeoJSONObj(JSON)) {
        return false
      }
      try {
        JSON_ = window.JSON.stringify(JSON)
      } catch (error) {
        return false
      }
    } else {
      JSON_ = JSON
    }
    if (isGeoJSON(JSON_)) {
      let feature
      if (typeof projection === 'string') {
        feature = new GeoJSON().readFeature(JSON_, {
          dataProjection: projection,
          featureProjection: this.#mapProj,
        })
      } else {
        const { style, ...projectionOptions } = projection
        feature = new GeoJSON().readFeature(JSON_, projectionOptions)
        style && feature.setStyle(style)
      }

      const type = feature.getGeometry()?.getType()
      const props = feature.getProperties()
      const id = feature.getId()
      if (!id) {
        feature.setId(genId(type))
      } else {
        const hasFeature = this.#source.getFeatureById(id)
        if (hasFeature) return false
      }
      const isCircle = props.geometryType === 'circle'
      // 使用多边形拟合圆
      if (isCircle && type === 'Polygon') {
        const center = props.center
        const radius = props.radius
        if (Array.isArray(center) && radius != null) {
          const center3857 = fromLonLat(center)
          const is3857 = this.#mapProj.endsWith('3857')
          const circle = new Feature(new Circle(is3857 ? center3857 : center, radius))
          circle.setId(id ?? genId('circle'))
          this.#source.addFeature(circle)
        }
      } else {
        this.#source.addFeature(feature)
      }
      return true
    }
    return false
  }

  enableDraw(type: GeoType, style?: Style | StyleLike | FlatStyle): void {
    if (!this.#map) return
    this.#drawingType = type
    // 只能同时启用一种绘制类型，先禁用之前的绘制
    this.disableDraw()
    this.disableSnap()
    if (type === 'None') {
      if (this.showToolBar) {
        this.drawTypes.forEach(t => {
          this.#setSelectedBtn(t, false)
        })
        // 支持自由绘制
        this.#enableBtn('freehand', true, `enable freehand draw.`)
      }
      return
    }
    this.disableSelect()
    this.disableModify()
    this.disableTranslate()
    if (style) {
      this.sketchStyle = style
    }
    this.#draw.value = new Draw({
      source: this.#source,
      type,
      freehand: this.#canFreehand && canFreehandType.includes(type),
      style: this.sketchStyle !== null ? this.sketchStyle : undefined,
    })
    this.#map.addInteraction(this.#draw.value)
    this.#drawStartOn = this.#draw.value.on('drawstart', (event: DrawEvent) => {
      this.dispatchEvent(event)
      const feature = event.feature
      const geometry = feature.getGeometry() as SimpleGeometry
      const flatCoords = geometry.getFlatCoordinates()
      const [lon, lat] = flatCoords
      const start = toLonLat([lon, lat])
      const start3857 = fromLonLat(start)
      const allFeatures = this.#source.getFeatures()
      const allData = this.#convertFeaturesToData(allFeatures)
      const startAt = {
        coord: start,
        coord3857: start3857,
      }
      this.dispatchEvent(
        new GeomEditorDrawEvent(GeomEditorEventType.DRAW_BEGIN, null, feature, startAt, allData, allFeatures),
      )
    })
    this.#drawEndOn = this.#draw.value.on('drawend', (event: DrawEvent) => {
      this.dispatchEvent(event)
      const feature = event.feature
      const geometry = feature.getGeometry() as SimpleGeometry
      const flatCoords = geometry.getFlatCoordinates()
      const [lon, lat] = flatCoords
      const start = toLonLat([lon, lat])
      const start3857 = fromLonLat(start)
      const startAt = {
        coord: start,
        coord3857: start3857,
      }
      const end = toLonLat([flatCoords.at(-2)!, flatCoords.at(-1)!])
      const end3857 = fromLonLat(end)
      const endAt = {
        coord: end,
        coord3857: end3857,
      }
      feature.setId(genId(this.#drawingType))
      const allFeatures = this.#source.getFeatures()
      allFeatures.push(feature)
      const allData = this.#convertFeaturesToData(allFeatures)
      if (this.#drawingType === 'Circle') {
        const circleData = this.#convertCircleToData(feature as Feature<Circle>)
        const event = new GeomEditorDrawEvent(
          GeomEditorEventType.DRAW_COMPLETE,
          circleData,
          feature,
          startAt,
          allData,
          allFeatures,
          endAt,
        )
        this.dispatchEvent(event)
      } else {
        const [data] = this.#convertFeaturesToData([feature])
        const event = new GeomEditorDrawEvent(
          GeomEditorEventType.DRAW_COMPLETE,
          data,
          feature,
          startAt,
          allData,
          allFeatures,
          endAt,
        )
        this.dispatchEvent(event)
      }
    })
    this.enableSnap()

    if (this.showToolBar) {
      // 渲染了 toolBar，就要改变按钮状态
      this.#setSelectedBtn(type, true)
      this.drawTypes.forEach(t => {
        if (t === type) return 'next loop'
        this.#setSelectedBtn(t, false)
      })
      if (!canFreehandType.includes(this.#drawingType)) {
        // 不支持自由绘制
        this.disableFreehand()
      } else {
        // 支持自由绘制
        this.#enableBtn('freehand', true, `enable freehand draw.`)
      }
    }
  }

  disableDraw() {
    if (!this.#map || !this.#draw.value) return
    this.disableSnap()
    if (this.showToolBar) {
      this.drawTypes.forEach(t => {
        this.#setSelectedBtn(t, false)
      })
      // 支持自由绘制
      this.#enableBtn('freehand', true, `enable freehand draw.`)
    }
    this.#map.removeInteraction(this.#draw.value)
    this.#draw.value = undefined
    unByKey(this.#drawEndOn!)
    unByKey(this.#drawStartOn!)
  }

  enableFreehand() {
    this.#canFreehand = true
    if (!canFreehandType.includes(this.#drawingType)) return
    this.enableDraw(this.#drawingType)
    if (this.showToolBar) {
      this.#setSelectedBtn('freehand', true)
    }
  }

  disableFreehand() {
    this.#canFreehand = false
    if (this.showToolBar) {
      this.#setSelectedBtn('freehand', false)
    }
    if (!canFreehandType.includes(this.#drawingType)) {
      this.#enableBtn('freehand', false, `current geometry type don't support freehand draw.`)
      return
    }
    if (this.sketchStyle) {
      this.enableDraw(this.#drawingType, this.sketchStyle)
    } else {
      this.enableDraw(this.#drawingType)
    }
  }

  // 选择要素
  select(id: Id | Id[], options?: SelectOptions): Feature[] {
    if (!this.#selectOn) return []
    const style = options?.selectedStyle
    const each = options?.eachFeature
    let _fit = true
    if (options?.fit === false) {
      _fit = false
    }
    const arr = []
    if (Array.isArray(id)) {
      arr.push(...id)
    } else {
      arr.push(id)
    }

    const mergedExtent: Extent = createEmpty()
    const selected: Feature[] = []
    let stopEach = false

    arr.forEach((id, index) => {
      const feat = this.#source.getFeatureById(id)
      if (feat) {
        // @ts-ignore
        selected.push(feat)
        // @ts-ignore
        this.#selected.push(feat)
        if (_fit) {
          // @ts-ignore
          const ex = feat.getGeometry()?.getExtent() as Extent
          extend(mergedExtent, ex)
        }
        if (style) {
          // @ts-ignore
          feat.setStyle(style)
        }
      }
      if (!stopEach && each && feat) {
        // @ts-ignore
        stopEach = !!each(feat, index)
      }
    })
    if (_fit && selected.length) {
      const _options = defaultFit
      if (options?.fit !== false) {
        Object.assign(_options, options?.fit === true ? {} : options?.fit)
        // @ts-ignore
        _options.padding = normalizePadding(_options.padding) as number[]
      }
      // @ts-ignore
      this.#view!.fit(mergedExtent, _options)
    }
    return selected
  }

  deselect(id: Id | Id[], options?: DeselectOptions): void {
    // if (!this.#selectOn) return
    const style = options?.deselectStyle
    const each = options?.eachFeature
    const arr = []
    if (Array.isArray(id)) {
      arr.push(...id)
    } else {
      arr.push(id)
    }
    // const data: GeometryData[] = []
    const deselected: Feature[] = []
    let stopEach = false

    arr.forEach((id, index) => {
      const feat = this.#source.getFeatureById(id)
      if (feat) {
        //@ts-ignore
        deselected.push(feat)
        //@ts-ignore
        this.#selected.remove(feat)
        //@ts-ignore
        feat.setStyle(style)
      }
      if (!stopEach && each && feat) {
        //@ts-ignore
        stopEach = !!each(feat, index)
      }
    })
  }

  enableSelect(
    options: SelectModeOptions = {
      multi: true,
      box: false,
      single: false,
    },
  ): boolean {
    this.disableDraw()
    this.#singleSelectable = options?.single === true // 默认关闭单选
    this.#boxSelectable = options?.box === true // 默认关闭框选
    this.#multiSelectable = options?.multi !== false // 默认开启多选
    if (this.#singleSelectable) {
      this.#multiSelectable = false
      this.#boxSelectable = false
    }
    if (this.#multiSelectable || this.#boxSelectable) {
      // 有多选，禁用编辑
      this.disableModify()
    }
    if (this.#selectOn) return true
    this.#selectOn = this.#map!.on('singleclick', this.#whenSingleClick.bind(this))
    return true
  }

  disableSelect(): boolean {
    unByKey(this.#selectOn!)
    // TODO 恢复未选中的样式
    this.#selectOn = null
    return true
  }

  // 平移要素
  enableTranslate(id?: Id): boolean {
    // 先启用多选
    this.enableSelect({
      multi: true,
    })
    // 禁用修改和绘制
    this.disableModify()
    this.disableDraw()
    if (this.#translate.value) {
      this.#translate.value.setActive(true)
      return true
    }
    this.#translate.value = new Translate({
      features: this.#selected,
    })
    this.#map?.addInteraction(this.#translate.value)
    this.#translate.value.on('translatestart', event => {
      this.dispatchEvent(event)
      this.#emitMoveStart(event)
    })
    this.#translate.value.on('translateend', event => {
      this.dispatchEvent(event)
      this.#emitMoveEnd(event)
    })
    return true
  }

  disableTranslate(id?: Id): boolean {
    if (!this.#translate.value) return true
    this.#translate.value.setActive(false)
    return true
  }

  /**
   * 启用修改
   * @param style 修改时候的样式
   * @example
   * ```ts
   * enableModify({
   *
   * })
   * ```
   */
  enableModify(style?: Style | StyleLike | FlatStyle) {
    // 编辑时一般都是先选中要素，再修改，需单选
    this.enableSelect({
      single: true,
    })
    this.disableTranslate()
    this.disableDraw()
    this.enableModifier = true
    if (this.showToolBar) {
      this.#setSelectedBtn('modify', true)
    }
    if (this.#modify.value) {
      this.#modify.value.setActive(true)
      this.enableSnap()
      return
    }
    if (style !== null) {
      this.modifyingStyle = style
    }
    this.#modify.value = new Modify({
      features: this.#selected,
      style: this.modifyingStyle !== null ? this.modifyingStyle : undefined,
    })
    this.#map?.addInteraction(this.#modify.value)
    this.#modify.value.on('modifystart', event => {
      this.dispatchEvent(event)
      const dataList = this.#convertFeaturesToData(event.features)
      const _event = new GeomEditorModifyEvent(GeomEditorEventType.MODIFY_BEGIN, dataList, event.features)
      this.dispatchEvent(_event)
    })
    this.#modify.value.on('modifyend', event => {
      this.dispatchEvent(event)
      const dataList = this.#convertFeaturesToData(event.features)
      const _event = new GeomEditorModifyEvent(GeomEditorEventType.MODIFY_COMPLETE, dataList, event.features)
      this.dispatchEvent(_event)
    })
    this.enableSnap()
  }

  disableModify(id?: Id | Id[], style?: StyleLike): boolean {
    this.disableSnap()
    this.enableModifier = false
    if (this.showToolBar) {
      this.#setSelectedBtn('modify', false)
    }
    if (!this.#modify.value) return true
    this.#modify.value.setActive(false)
    return true
  }

  disableSnap() {
    if (!this.#snap) return
    this.#snap.setActive(false)
  }

  enableSnap() {
    if (this.#snap) {
      this.#snap.setActive(true)
      return
    }
    this.#snap = new Snap({
      source: this.#source,
      // @ts-ignore
      intersection: true,
    })
    this.#map?.addInteraction(this.#snap)
  }

  //  删除要素
  removeFeatures(id?: Id | Id[]) {
    if (id === null || id === undefined) {
      this.#selected.forEach(f => {
        this.#source.removeFeature(f)
      })
      this.#selected.clear()
      return
    }
    const ids = Array.isArray(id) ? id : [id]
    ids.forEach(id => {
      const feature = this.#source.getFeatureById(id)
      if (feature) {
        this.#source.removeFeature(feature)
        this.#selected.remove(feature)
      }
    })
    // TODO 抛出事件
  }

  removeAllFeatures() {
    this.#source.clear()
    this.#selected.clear()
    // TODO 抛出事件
    return Promise.resolve(true)
  }

  // 编辑完毕
  completeEdit(): void {
    // TODO
  }

  protected render() {
    this.#renderToolBar()
    //this.#setupAutoRender()
    this.#setupEvents()
  }

  /**
   * 渲染 toolBar
   */
  #renderToolBar() {
    if (!this.#map?.getTargetElement()) return
    const map = this.#map
    const controlContainer = map.getTargetElement().querySelector('.ol-overlaycontainer-stopevent')
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('geom-editor-tool-bar')
    btnContainer.classList.add('ol-control')
    btnContainer.style = 'pointer-events: auto;'

    this.allButtons.forEach(btn => {
      const btnElement = document.createElement('button')
      btnElement.classList.add('geom-editor-btn')

      const action = btn.name as ElementOf<typeof DEFAULT_ACTIONS>
      const isDefaultAction = this.actions.includes(action)
      if (isDefaultAction) {
        if (action === 'complete') {
          btnElement.disabled = true
        } else if (this.#source.getFeatures().length) {
          // 四个操作默认禁用
          btnElement.disabled = false
        } else {
          btnElement.disabled = true
          btnElement.title = ''
        }
      }
      btnElement.innerHTML = btn.icon(olBrandColor)
      btnElement.title = btn.title
      btnElement.dataset.type = btn.type
      btnContainer.appendChild(btnElement)
    })
    controlContainer!.appendChild(btnContainer)
    this.toolBarContainer = btnContainer
  }

  #setupEvents() {
    if (!this.toolBarContainer) return
    this.toolBarContainer.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const btn = target.closest('button')
      if (!btn) return
      const type = btn.dataset.type as string
      console.log({ type, btn }, 'zqj')
      if (this.drawTypes.includes(type as GeoType)) {
        this.enableDraw(type as GeoType)
      } else if (type === 'freehand') {
        // 开启自由绘制
        if (this.#canFreehand) {
          this.disableFreehand()
        } else {
          this.enableFreehand()
        }
      } else if (type === 'modify') {
        if (this.enableModifier) {
          this.disableModify()
        } else {
          this.enableModify()
        }
      }
    })
  }

  #setupAutoRender() {}

  #initOptions(options: GeomEditorOptions) {
    const { layerStyle, selectedStyle } = options
    if (selectedStyle) {
      this.selectedStyle = selectedStyle
    }
    const z = zIndex + 1
    this.#layer = new VectorLayer({
      zIndex: z,
      source: this.#source,
      className: this.#geneClassName(options),
      style: layerStyle,
    })

    this.supportFreehand = options?.supportFreehand !== false
    this.showToolBar = options?.showToolBar !== false

    if (Array.isArray(options.actions)) {
      this.actions = options.actions
    }
    if (Array.isArray(options.drawTypes)) {
      this.drawTypes = options.drawTypes
    }
    // 几何类型
    const _types = buttons.filter(btn => this.drawTypes.includes(btn.type as GeoType))
    // 是否支持自由绘制
    if (this.supportFreehand) {
      _types.push(buttons.find(btn => btn.name === 'freehand')!)
    }
    // 操作
    const _actions = buttons.filter(btn => this.actions.includes(btn.name as Action))
    this.allButtons = [..._types, ..._actions]
  }

  #whenSingleClick(e: MapBrowserEvent<MouseEvent>) {
    const features = this.#source.getFeatures()
    if (features.length === 0) return
    const hasFeature = this.#map!.hasFeatureAtPixel(e.pixel)
    if (!hasFeature) {
      // 点到非要素区域，取消所有选中
      this.#selected.forEach(feat => {
        feat.setStyle(undefined)
      })
      this.#selected.clear()
      return
    }
    const hitFeature = (f: Feature<Geometry>) => {
      if (!f) return
      const feat = this.#selected.getArray().find(feat => feat.getId() === f.getId())
      if (this.#singleSelectable) {
        // 点击的要素没有被选中，就选中
        this.#selected.forEach(feat => {
          feat.setStyle(undefined)
        })
        this.#selected.clear()
        if (!feat) {
          this.#selected.push(f)
          f.setStyle(this.selectedStyle)
        }
      } else {
        if (feat) {
          this.#selected.remove(feat)
          f.setStyle(undefined)
        } else {
          this.#selected.push(f)
          f.setStyle(this.selectedStyle)
        }
      }
    }
    this.#map!.forEachFeatureAtPixel(
      e.pixel,
      f => {
        hitFeature(f as Feature)
      },
      {
        layerFilter: layer => {
          return layer === this.#layer
        },
      },
    )
  }

  #onPointerMove(evt: MapBrowserEvent<MouseEvent>) {
    if (evt.dragging || !this.#selectOn) {
      return
    }
    const map = evt.map!
    // 获取当前鼠标位置的像素坐标
    const pixel = map.getEventPixel(evt.originalEvent)
    // 检查当前位置是否有要素
    const hit = map.hasFeatureAtPixel(pixel)
    map.getTargetElement().style.cursor = hit ? 'pointer' : ''
  }

  #onSourceChange() {
    // 修改现有的要素
    this.#source.on('changefeature', () => {
      //console.log('changefeature')
      // this.#enableBtn('complete', true, TITLE_MAP['complete'])
    })

    // 添加新要素
    let hasFeature = false
    const onAddFeature = () => {
      if (this.showToolBar && !hasFeature) {
        this.actions.forEach(action => {
          this.#enableBtn(action, true, ACTION_TITLE[action])
        })
        hasFeature = true
      }
    }
    this.#source.on('addfeature', onAddFeature)

    // 移除要素
    const onRemoveFeature = () => {
      hasFeature = this.#source.getFeatures().length > 0
      if (!hasFeature && this.showToolBar) {
        this.actions.forEach(action => {
          if (action === 'complete') return 'next loop'
          this.#enableBtn(action, false, '')
        })
      }
    }
    this.#source.on('removefeature', debounce(onRemoveFeature))
  }

  #onSelectedChange() {
    const add = (e: CollectionEvent<Feature<Geometry>>) => {
      const feature = e.element
      const feats = this.#selected.getArray()
      const [selectData] = this.#convertFeaturesToData([feature])
      const dataArray = this.#convertFeaturesToData(feats)
      this.dispatchEvent(
        new GeomEditorSelectEvent(GeomEditorEventType.SELECT, dataArray, selectData, feats, []),
      )
    }
    this.#selected.on('add', add)

    const remove = (e: CollectionEvent<Feature<Geometry>>) => {
      const feature = e.element
      const [deselectData] = this.#convertFeaturesToData([feature])
      const selectedFeatures = this.#selected.getArray()
      const deselectArray = this.#convertFeaturesToData([feature])
      const deselectFeatures = [feature]

      this.dispatchEvent(
        new GeomEditorDeselectEvent(
          GeomEditorEventType.DESELECT,
          deselectArray,
          deselectData,
          selectedFeatures,
          deselectFeatures,
        ),
      )
    }

    this.#selected.on('remove', remove)
  }

  #addLayer() {
    if (!this.#layer) return
    this.#map?.addLayer(this.#layer)
  }

  #toWKT(feature: Feature): GeometryWKT {
    const { feature: feat, id } = this.#setFeatureId(feature)
    const wkt = new WKT().writeFeature(feat, {
      dataProjection: this.#dataProj,
      featureProjection: this.#mapProj!,
    })
    return { wkt, id }
  }
  #setFeatureId(feature: Feature) {
    let id
    if (!feature.getId()) {
      id = genId()
      feature.setId(id)
    } else {
      id = feature.getId()
    }
    return {
      id,
      feature,
    }
  }
  #toGeojson(feature: Feature): GeometryGeoJSON {
    const { feature: feat, id } = this.#setFeatureId(feature)
    const geojsonObj = new GeoJSON().writeFeatureObject(feat, {
      dataProjection: this.#dataProj,
      featureProjection: this.#mapProj!,
    })
    const geojson = new GeoJSON().writeFeature(feat, {
      dataProjection: this.#dataProj,
      featureProjection: this.#mapProj!,
    })
    return {
      id,
      geojsonObj,
      geojson,
    }
  }
  #convertFeaturesToData(feats: Collection<Feature> | Array<Feature>): GeometryData[] {
    let list = []
    if (Array.isArray(feats)) {
      list = feats
    } else {
      list = feats.getArray()
    }
    return list.map(feat => {
      const type = feat.getGeometry()?.getType()
      if (type === 'Circle') {
        return this.#convertCircleToData(feat as Feature<Circle>)
      }
      const { wkt, id: id_ } = this.#toWKT(feat!)
      const { geojson, geojsonObj } = this.#toGeojson(feat!)
      return {
        wkt,
        id: id_,
        geojson,
        geojsonObj,
      }
    })
  }
  #convertCircleToData(feature: Feature<Circle>): GeometryData {
    const circle = feature.getGeometry() as Circle
    const flatCoords = circle.getFlatCoordinates()
    const r = circle.getRadius()
    const center = toLonLat(circle.getCenter())
    const c1 = transform([flatCoords[2], flatCoords[3]], this.#mapProj, 'EPSG:4326')
    const radius = getDistance(center, c1)
    const center3857 = fromLonLat(center)
    const code = this.#mapProj.replace('EPSG:', '')
    const properties = {
      geometry: 'circle',
      center,
      radius,
      center3857,
      ['radius' + code]: r,
    }

    const polygon = circular(center, r, 128)
    const id = feature.getId()
    const polygonFeature = new Feature(polygon)
    polygonFeature.setId(id)
    const wkt = new WKT().writeFeature(polygonFeature, {
      dataProjection: this.#dataProj,
      featureProjection: this.#dataProj,
    })
    const geojsonObj = new GeoJSON().writeFeatureObject(polygonFeature, {
      dataProjection: this.#dataProj,
      featureProjection: this.#dataProj,
    })

    geojsonObj.properties = properties
    const geoJson = JSON.stringify(geojsonObj)

    return {
      id,
      wkt,
      geojson: geoJson,
      geojsonObj,
    }
  }

  #emitMoveStart(event: TranslateEvent) {
    const { features, startCoordinate } = event
    this.dispatchEvent(this.#createMoveEvent(features, startCoordinate))
  }
  #emitMoveEnd(event: TranslateEvent) {
    const { features, startCoordinate, coordinate } = event
    this.dispatchEvent(this.#createMoveEvent(features, startCoordinate, coordinate))
  }
  #createMoveEvent(features: Collection<Feature<Geometry>>, startAt: Coordinate, endAt?: Coordinate) {
    const dataList = this.#convertFeaturesToData(features)
    const start = transform(startAt, this.#mapProj, 'EPSG:4326')
    const start3857 = transform(startAt, this.#mapProj, 'EPSG:3857')
    const _startAt = {
      coord: start,
      coord3857: start3857,
    }

    if (endAt) {
      const end = transform(endAt, this.#mapProj, 'EPSG:4326')
      const end3857 = transform(endAt, this.#mapProj, 'EPSG:3857')
      const _endAt = {
        coord: end,
        coord3857: end3857,
      }
      return new GeomEditorMoveEvent(GeomEditorEventType.MOVE_END, dataList, features, _startAt, _endAt)
    }
    return new GeomEditorMoveEvent(GeomEditorEventType.MOVE_START, dataList, features, _startAt)
  }
  #geneClassName(options: GeomEditorOptions) {
    const { className = 'ol-layer' } = options
    return [className, `geom-editor-layer z-index:${zIndex + 1}`].join(' ')
  }

  #setSelectedBtn(type: string, isActive: boolean) {
    const btn = this.#queryBtn(type)
    if (!btn) return
    if (isActive) {
      btn.classList.remove('hidden')
      btn?.classList.add('selected')
    } else {
      btn?.classList.remove('selected')
    }
  }

  #enableBtn(type: string, enable: boolean, title: string) {
    const btn = this.#queryBtn(type)
    if (!btn) return
    btn.disabled = enable === false
    btn.title = title
  }

  #queryBtn(type: string) {
    return this.toolBarContainer?.querySelector(`[data-type="${type}"]`) as HTMLButtonElement
  }
}

export { GeomEditor, type GeomEditorOptions }

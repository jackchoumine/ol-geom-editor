// sort-imports-ignore
import { Map, View } from 'ol'
import type { Feature } from 'ol'
import { Tile } from 'ol/layer'
import { fromLonLat } from 'ol/proj'
import { OSM } from 'ol/source'
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from 'ol/style'

import 'ol/ol.css'
import 'highlight.js/styles/github.css'
// 测试编译后的代码
import '../../dist/index.css'
// 发布到 npm 的代码
//import 'ol-geom-editor/dist/index.css'
import './reset.css'
import './style.scss'
import './docs.scss'

//import { GeomEditor } from '../../dist/index.js'
//import '../../dist/geom-editor.css'
//@ts-ignore
import readme from '../../README.md'
import { circle, geoJSONObj, lineWKT, pointJSON, polygonWKT } from './testData.ts'
// 编译后的代码
//import { GeomEditor, version } from '../../dist'
//import { GeomEditor } from '../../src/GeomEditor'
// 发布到 npm 的代码
import { GeomEditor, version } from 'ol-geom-editor'
console.log({ version }, 'zqj')

document.querySelector('.docs').innerHTML = readme

const guiYang = [106.675271, 26.579508]

const guiYang3857 = fromLonLat(guiYang)

// const olDraw = new OlDraw()
const map = new Map({
  target: 'ol-geom-editor-map',
  layers: [
    new Tile({
      source: new OSM(),
    }),
  ],
  // interactions: ,
  view: new View({
    center: guiYang, //3857, // Initial center (longitude, latitude)
    zoom: 10, // Initial zoom level
    projection: 'EPSG:4326',
  }),
})

const layerStyle = {
  'fill-color': 'rgba(255,255,255,0.4)',
  'stroke-color': '#3399CC',
  'stroke-width': 1.25,
  'circle-radius': 50,
  'circle-fill-color': 'rgba(255,255,255,0.4)',
  'circle-stroke-width': 1.25,
  'circle-stroke-color': '#3399CC',
}

const olDraw = new GeomEditor(map, {
  layerStyle,
  //selectedStyle: false,
})

olDraw.on('select', event => {
  console.log({ event })
})

olDraw.on('deselect', event => {
  console.log({ event })
  const { deselected: features } = event
  let pointStyle = new Style({
    image: new Icon({
      src: '/typescript.svg', // 图片URL
      anchor: [0.5, 0.5], // 锚点：图片底部中心对齐坐标点
      scale: 0.7, // 缩放比例
    }),
  })
  features.forEach(f => {
    const type = f.getGeometry().getType()
    console.log({ type })
    if (type === 'Point') {
      f.setStyle(pointStyle)
    }
  })
})
olDraw.on('drawstart', event => {
  console.log({ event })
})
olDraw.on('drawend', event => {
  console.log({ event })
})

olDraw.on('drawBegin', event => {
  console.log({ event })
})

olDraw.on('drawComplete', event => {
  console.log({ event })
  const { feature } = event
  let pointStyle = new Style({
    image: new Icon({
      src: '/typescript.svg', // 图片URL
      anchor: [0.5, 0.5], // 锚点：图片底部中心对齐坐标点
      scale: 0.7, // 缩放比例
    }),
  })
  const type = feature.getGeometry().getType()
  console.log({ type })
  if (type === 'Point') {
    feature.setStyle(pointStyle)
  }
})
olDraw.on('translatestart', event => {
  console.log({ event })
})

olDraw.on('translateend', event => {
  console.log({ event })
})
olDraw.on('translateBegin', event => {
  console.log({ event })
})

olDraw.on('translateComplete', event => {
  console.log({ event })
})

olDraw.on('modifystart', event => {
  console.log({ event })
})
olDraw.on('modifyend', event => {
  console.log({ event })
})
olDraw.on('modifyBegin', event => {
  console.log({ event })
})

olDraw.on('modifyComplete', event => {
  console.log({ event })
})
olDraw.on('remove', event => {
  console.log({ event })
})
olDraw.on('complete', event => {
  console.log({ event })
})

document.querySelector('#add-wkt')!.addEventListener('click', addWKT)
document.querySelector('#add-JSON')!.addEventListener('click', addJSON)
document.querySelector('#add-JSONObj')!.addEventListener('click', addJSONObj)
document.querySelector('#remove-feature')!.addEventListener('click', removeFeature)
document.querySelector('#remove-selected-features')!.addEventListener('click', removeSelectedFeatures)
document.querySelector('#remove-all-features')!.addEventListener('click', removeAllFeatures)
document.querySelector('#select-features')!.addEventListener('click', onSelect)
document.querySelector('#deselect-features')!.addEventListener('click', onDeselect)
document.querySelector('#enable-select')!.addEventListener('click', enableSelect)
document.querySelector('#enable-select-single')!.addEventListener('click', enableSingleSelect)
document.querySelector('#disable-select')!.addEventListener('click', disableSelect)
document.querySelector('#translate-features')!.addEventListener('click', onTranslate)
document.querySelector('#disable-translate')!.addEventListener('click', disableTranslate)
document.querySelector('#enable-modify')!.addEventListener('click', enableModify)
document.querySelector('#disable-modify')!.addEventListener('click', disableModify)
document.querySelector('#select-type')!.addEventListener('change', onChangeType)
document.querySelector('#freehand')!.addEventListener('change', onChangeFreehand)

function addWKT() {
  console.log('addWKT')
  const feat1 = olDraw.addFeatureFromWKT(lineWKT, 'line1')
  const feat2 = olDraw.addFeatureFromWKT(polygonWKT)
  console.log({ feat1, feat2 })
}

function addJSON() {
  console.log('addJSON')
  // { dataProjection: 'EPSG:4326' }
  const f = olDraw.addFeatureFromJSON(pointJSON)
  console.log({ f })
}

function addJSONObj() {
  console.log('addJSONObj')
  const feat1 = olDraw.addFeatureFromJSON(geoJSONObj)
  const feat2 = olDraw.addFeatureFromJSON(circle)
  console.log({ feat2, feat1 })
}

function removeSelectedFeatures() {
  olDraw.removeFeatures()
}

function removeFeature() {
  olDraw.removeFeatures(['line1', 'p2CQqn2lFk'])
}

function removeAllFeatures() {
  olDraw.removeAllFeatures().then(success => {
    console.log({ success })
  })
}

const fillColor = 'rgba(218,228,194,0.5)'
const strokeColor = 'rgba(255, 204, 51, 0.9)'

function onSelect() {
  const features = olDraw.select(['circle'], {
    selectedStyle: new Style({
      fill: new Fill({
        color: fillColor,
      }),
      stroke: new Stroke({
        color: strokeColor,
        width: 4,
      }),
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({ color: fillColor }),
        stroke: new Stroke({ color: strokeColor, width: 2 }),
      }),
    }),
    eachFeature: (feat: Feature, index: number) => {
      console.log({ feat })
      if (index === 0) return true
    },
  })
  console.log('selected features:', features)
}

function onDeselect() {
  olDraw.deselect(['line1', 'p2CQqn2lFk'])
}

function enableSelect() {
  olDraw.enableSelect()
}

function enableSingleSelect() {
  olDraw.enableSelect({ single: true })
}

function disableSelect() {
  olDraw.disableSelect()
}

function onTranslate() {
  olDraw.enableTranslate()
}

function disableTranslate() {
  olDraw.disableTranslate()
}

function enableModify() {
  olDraw.enableModify()
}

function disableModify() {
  olDraw.disableModify()
}

const canFreehandTypes = ['LineString', 'Polygon']

const flatStyle = {
  'fill-color': 'rgba(255, 200, 200, 0.4)',
  'stroke-color': '#ff0000',
  'stroke-line-dash': [5, 10],
  'circle-radius': 6,
  'circle-fill-color': '#ff0000',
  'circle-stroke-color': 'yellow',
  'circle-stroke-width': 2,
}

function onChangeType(e: Event) {
  const type = (e.target as HTMLSelectElement).value
  console.log('change type to:', type)
  const freehandCheckbox = document.querySelector('#freehand') as HTMLInputElement
  const freehand = document.querySelector('#freehand-box') as HTMLInputElement
  if (canFreehandTypes.includes(type)) {
    // freehand.classList.remove('none')
    freehand.title = 'Freehand drawing for ' + type
    freehandCheckbox.disabled = false
  } else {
    // freehand.classList.add('none')
    freehand.title = '仅线和面支持自由绘制'
    freehandCheckbox.checked = false
    freehandCheckbox.disabled = true
    olDraw.disableFreehand()
  }

  olDraw.enableDraw(
    type as any,
    flatStyle,
    //new Style({
    //  fill: new Fill({ color: 'rgba(255, 200, 200, 0.4)' }),
    //  stroke: new Stroke({ color: '#ff0000', lineDash: [10, 10], width: 2 }),
    //  image: new CircleStyle({
    //    radius: 6,
    //    fill: new Fill({ color: '#ff0000' }),
    //    stroke: new Stroke({ color: '#fff', width: 2 }),
    //  }),
    //}),
  )
}

function onChangeFreehand(e: Event) {
  const freehand = (e.target as HTMLInputElement).checked
  console.log('change freehand to:', freehand)
  if (freehand) {
    olDraw.enableFreehand()
  } else {
    olDraw.disableFreehand()
  }
}

//function enableDraw(type: GeoType, style?: StyleLike | FlatStyle): void {
//  // 只能同时启用一种绘制类型，先禁用之前的绘制
//  this.#draw.value = new Draw({
//    source: this.#source,
//    type,
//    style
//  })
//  this.#map.addInteraction(this.#draw.value)
//}

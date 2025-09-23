/* eslint-disable no-unused-vars */
/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-08 01:37:38
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-24 01:34:31
 * @Description : OlDraw 相关类型定义
 */
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import type { Size } from 'ol/size'
import type { StyleLike } from 'ol/style/Style'
import type Style from 'ol/style/Style'
import type { FlatStyle } from 'ol/style/flat'

import type { GeoJSON } from 'geojson'

export type ProjCode = `EPSG:${number}`

export type GeomType = 'Point' | 'LineString' | 'Polygon' | 'Circle' | 'None'

type FeatureId = number | string

export type FeatureOptions = {
  /**
   * 数据的投影
   */
  dataProjection?: ProjCode
  /**
   * 要素的投影，和地图的投影相同
   */
  featureProjection?: ProjCode
  ///**
  // * 范围
  // */
  //extent?: number[]
  /**
   * 样式
   */
  style?: StyleLike
}

export type GeometryWKT = {
  wkt: string
  id?: FeatureId
}

export type GeometryGeoJSON = {
  id?: FeatureId
  geojson: string
  geojsonObj: GeoJSON
}

export type GeometryData = GeometryWKT & GeometryGeoJSON

type EachFeature = (feature: Feature<Geometry>, index: number) => boolean | void

export type Padding =
  | number
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]

/**
 * 用于 View.fit 的配置选项
 */
export type FitOptions = {
  /**
   * 动画持续时间（毫秒）
   */
  duration?: number
  /**
   * 视图的最大缩放等级
   */
  maxZoom?: number
  /**
   * 内边距 单位 是像素
   * 接收和 css padding 类似的值
   * ```ts
   * // 一个值
   * const fit = {
   *    padding: 10,// 会被转成 [10, 10, 10, 10]
   *    // 或者
   *    // padding: [10],// 会被转成 [10, 10, 10, 10]
   * }
   * // 两个值
   * const fit = {
   *    padding: [10, 20],// 会被转成 [10, 20, 10, 20]
   * }
   * // 三个值
   * const fit = {
   *    padding: [10, 20, 30],// 会被转成 [10, 20, 30, 20]
   * }
   * // 四个值
   * const fit = {
   *    padding: [10, 20, 30, 40],
   * }
   * ```
   */
  padding?: Padding
  /**
   * 动画完成时的回调函数
   */
  callback?: (completed: boolean) => void
  /**
   * 视图渲染的像素大小 [width, height]
   */
  size?: Size
  /**
   * 是否约束分辨率到预定义的等级
   */
  constrainResolution?: boolean

  /**
   * 是否选择最接近的分辨率
   */
  nearest?: boolean

  /**
   * 动画缓动函数
   */
  easing?: (t: number) => number
}

export type SelectOptions = {
  /**
   * 选中的要素样式
   */
  selectedStyle?: Style | StyleLike | FlatStyle
  /**
   * 遍历找到的要素
   * 返回 truthy，停止遍历
   */
  eachFeature?: EachFeature
  /**
   * 选中要素后，是否调整视图到选中的要素
   */
  fit?: boolean | FitOptions
}

export type DeselectOptions = {
  /**
   * 取消选中后的要素样式
   */
  deselectStyle?: Style | StyleLike | FlatStyle
  /**
   * 遍历找到的要素
   * 返回 truthy，停止遍历
   */
  eachFeature?: EachFeature
}

export type Id = string | number

export type SelectModeOptions = {
  /**
   * 是否允许多选
   * 默认开启
   */
  multi?: boolean
  /**
   * 是否启用框选
   */
  box?: boolean
  /**
   * 单选
   * 多选和框选，都是多选，和 single 互斥
   * 开启后，会禁用多选和框选
   */
  single?: boolean

  /**
   * 选中时的样式
   */
  style?: Style | StyleLike | FlatStyle
}

/**
 * @description: OpenLayers Draw Interaction Interface
 */
export abstract class GeomEditorI {
  /**
   * 从 wkt 读取要素
   * @param wkt wkt字符串
   * @param id 可选的 id，如果提供，则设置要素的 id，否则自动生成一个唯一 id
   * @param projection wkt 字符串的投影，默认 'EPSG:4326'
   */
  abstract addFeatureFromWKT(wkt: string, id: Id, dataProjection: ProjCode | FeatureOptions): boolean

  /**
   * 从 JSON 添加要素
   * @param JSON 字符串 或者 GeoJSON 对象
   * @param projection JSON 的投影，默认 'EPSG:4326'
   */
  abstract addFeatureFromJSON(JSON: string | GeoJSON, dataProjection: ProjCode | FeatureOptions): boolean

  /**
   * 启用绘制
   * @param type 几何类型
   * @param style 绘制的时的样式，会传递给 Draw 的 style 参数
   */
  abstract enableDraw(type: GeomType, style?: Style | StyleLike | FlatStyle): void

  /**
   * 禁用绘制
   */
  abstract disableDraw(): void

  /**
   * 启用自由绘制
   * // NOTE 只有正在绘制【线】、【多边形】才生效，启用自由绘制才有意义
   */
  abstract enableFreehand(): void

  /**
   * 禁用自由绘制
   */
  abstract disableFreehand(): void

  /**
   * 通过 id 选中要素，找不到返回 null
   * @param id 要素 id 或者 id 数组
   * @param options 配置对象
   */
  abstract select(id: Id | Id[], options?: SelectOptions): Feature[]

  /**
   * 移除选中的要素
   * @param id 要素 Id 数组 或者 Id
   * @param options 配置对象
   */
  abstract deselect(id: Id | Id[], options?: DeselectOptions): void

  /**
   * 选中要素
   * @param options 配置对象
   */
  abstract enableSelect(options?: SelectModeOptions): boolean

  /**
   * 禁用选中的要素
   * @param idsOrFeatures 要素id 或者 要素组成的数组
   * @param force 强制禁用
   * @returns 是否禁用成功
   */
  abstract disableSelect(idsOrFeatures?: Id[] | Feature[], force?: boolean): boolean

  /**
   * 开启修改 启用后要素可修改
   * @param style 启用修改后的样式，告知用户处在修改状态
   */
  abstract enableModify(style?: StyleLike | FlatStyle): void

  /**
   * 禁用修改，禁用后要素不可修改，触发 'modifyDisable' 事件
   * // NOTE 修改期间修改要素，会触发 modifyend 和 modifystart
   * @param id 单个 id 或者 id 数组
   * @param style 禁用编辑后的样式，不提供，恢复到启用修改的样式
   */
  abstract disableModify(id?: Id | Id[], style?: StyleLike): boolean
  /**
   *  启用捕获
   */
  abstract enableSnap(): void
  /**
   *  禁用捕获
   */
  abstract disableSnap(): void

  /**
   * 启用平移
   * @param id 要素 id
   */
  abstract enableTranslate(id?: Id): boolean

  /**
   * 禁用平移
   * @param id 要素 id
   */
  abstract disableTranslate(id?: Id): boolean

  /**
   * 移除要素 成功移除后返回 true
   * @param id 要素id 或者 id 数组，未提供则移除所有选中的要素
   */
  abstract removeFeatures(id?: Id | Id[]): void

  /**
   * 移除所有要素
   * options?: ConfirmOptions
   */
  abstract removeAllFeatures(): Promise<boolean>

  /**
   * 完成编辑
   */
  abstract completeEdit(): void
}

export type Button = {
  name: string
  type: GeomType | string
  title: string
  icon: (color: string) => string
}

type ElementOf<T extends readonly unknown[]> = T[number]

export const buttons: Button[] = [
  {
    name: 'point',
    type: 'Point',
    title: '绘制点',
    icon: (color: string) => {
      return `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1.5rem"
  height="1.5rem"
  viewBox="0 0 24 24" title="绘制点">
  <path
    fill="${color}"
    stroke="${color}"
    d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
</svg>`
    },
  },
  {
    name: 'line',
    type: 'LineString',
    title: '绘制线',
    icon: (color: string) => {
      return `<svg
xmlns="http://www.w3.org/2000/svg"
width="1.5rem"
height="1.5rem"
viewBox="0 0 24 24">
<path
  fill="${color}"
  stroke="${color}"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1"
  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9" />
</svg>`
    },
  },
  {
    name: 'polygon',
    type: 'Polygon',
    title: '绘制多边形',
    icon: (color: string) => {
      return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${color}"
        stroke-width="1"
        d="m21.934 11.751l-4.75-8.255a.5.5 0 0 0-.434-.25h-9.5a.5.5 0 0 0-.434.25l-4.75 8.255a.5.5 0 0 0 0 .498l4.75 8.255c.09.155.255.25.434.25h9.5a.5.5 0 0 0 .434-.25l4.75-8.255a.5.5 0 0 0 0-.498m-5.473 8.004H7.539L3.077 12L7.54 4.245h8.922L20.923 12z" />
    </svg>`
    },
  },
  {
    name: 'circle',
    type: 'Circle',
    title: '绘制圆',
    icon: (color: string) => {
      return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="${color}"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z" />
  </svg>`
    },
  },
  {
    name: 'rectangle',
    type: 'Rectangle',
    title: '绘制矩形',
    icon: (color: string) => {
      return `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <path
         fill="none"
         stroke="${color}"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="1"
         d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
     </svg>`
    },
  },
  {
    name: 'freehand',
    type: 'freehand',
    title: '自由绘制，只有线、多边形和圆支持',
    icon: (color: string) => {
      return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 32 32">
      <path
        fill="${color}"
        d="M14 2.5a.5.5 0 0 1 .5-.5h1c4.01 0 6.81.25 8.621.702c.903.226 1.602.512 2.085.875c.497.372.794.852.794 1.423c0 .47-.122.948-.52 1.368c-.379.399-.963.696-1.783.926C23.062 7.752 20.25 8 15.5 8s-7.438.252-8.928.669c-.742.208-1.127.441-1.326.652C5.066 9.51 5 9.72 5 10c0 .179.078.387.394.623c.33.247.88.493 1.727.704c1.232.308 3.002.525 5.417.62q-.038.27-.038.553v.446c-2.456-.096-4.301-.318-5.621-.648c-.903-.226-1.602-.512-2.085-.875C4.297 11.05 4 10.571 4 10c0-.47.122-.948.52-1.368c.379-.399.963-.696 1.783-.926C7.939 7.248 10.75 7 15.5 7c4.751 0 7.439-.252 8.928-.669c.742-.208 1.127-.441 1.326-.652c.18-.19.246-.399.246-.679c0-.179-.078-.387-.394-.623c-.33-.247-.88-.493-1.727-.704C22.189 3.25 19.489 3 15.5 3h-1a.5.5 0 0 1-.5-.5m2.476 7.5a2.5 2.5 0 0 0-2.5 2.5v6.731l-1.285-.57a4.49 4.49 0 0 0-5.513 1.55a1.006 1.006 0 0 0 .427 1.491c5.713 2.518 7.633 4.811 8.437 6.54c.502 1.079 1.616 1.93 2.917 1.73l3.634-.56a2.5 2.5 0 0 0 2.046-1.867l1.224-4.92a4.5 4.5 0 0 0-3.651-5.53l-3.237-.521v-4.075A2.5 2.5 0 0 0 16.476 10m-1.5 2.5a1.5 1.5 0 0 1 3 0V17a.5.5 0 0 0 .42.494l3.657.588a3.5 3.5 0 0 1 2.84 4.301l-1.224 4.92a1.5 1.5 0 0 1-1.228 1.121l-3.634.56c-.742.114-1.488-.368-1.858-1.163c-.944-2.03-3.104-4.462-8.941-7.034l-.004-.002l-.002-.005a3.49 3.49 0 0 1 4.284-1.204l1.988.881a.5.5 0 0 0 .703-.457z" />
    </svg>`
    },
  },
  {
    name: 'modify',
    type: 'modify',
    title: '修改要素，按住 alt 可删除顶点',
    icon: (color: string) => {
      return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="${color}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1">
        <path
          d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
        <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
      </g>
    </svg>`
    },
  },
  {
    name: 'translate',
    type: 'translate',
    title: '移动要素',
    icon: (color: string) => {
      return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24">
      <path
        fill="${color}"
        d="m12 3l.365-.342l-.365-.39l-.365.39zm-.5 6a.5.5 0 0 0 1 0zm3.865-3.142l-3-3.2l-.73.684l3 3.2zm-3.73-3.2l-3 3.2l.73.684l3-3.2zM11.5 3v6h1V3zm9.5 9l.342.365l.39-.365l-.39-.365zm-6-.5a.5.5 0 0 0 0 1zm3.142 3.865l3.2-3l-.684-.73l-3.2 3zm3.2-3.73l-3.2-3l-.684.73l3.2 3zM21 11.5h-6v1h6zM12 21l.365.342l-.365.39l-.365-.39zm-.5-6a.5.5 0 0 1 1 0zm3.865 3.142l-3 3.2l-.73-.684l3-3.2zm-3.73 3.2l-3-3.2l.73-.684l3 3.2zM11.5 21v-6h1v6zM3 12l-.342.365l-.39-.365l.39-.365zm6-.5a.5.5 0 0 1 0 1zm-3.142 3.865l-3.2-3l.684-.73l3.2 3zm-3.2-3.73l3.2-3l.684.73l-3.2 3zM3 11.5h6v1H3z" />
    </svg>`
    },
  },
  {
    name: 'remove',
    type: 'remove',
    title: '删除要素',
    icon: (color: string) => {
      return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 20 20">
      <path
        fill="${color}"
        d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    </svg>`
    },
  },
  {
    name: 'complete',
    type: 'complete',
    title: '完成',
    icon: (color: string) => {
      return `<svg
       xmlns="http://www.w3.org/2000/svg"
       width="1.5rem"
       height="1.5rem"
       viewBox="0 0 24 24">
       <g fill="none" fill-rule="evenodd">
         <path
           d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
         <path
           fill="${color}"
           d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.414A2 2 0 0 0 19.414 5L17 2.586A2 2 0 0 0 15.586 2zm0 2h9.586L18 6.414V20H6zm10.238 6.793a1 1 0 1 0-1.414-1.414l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879Z" />
       </g>
     </svg>`
    },
  },
  {
    name: 'removeAll',
    type: 'removeAll',
    title: '删除所有',
    icon: (color: string) => {
      return `<svg  xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 1024 1024"><path fill="${color}" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>`
    },
  },
] as const

export { type ElementOf }

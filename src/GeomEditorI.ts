/* eslint-disable no-unused-vars */
/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-08 01:37:38
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-21 17:46:25
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

export type GeoType = 'Point' | 'LineString' | 'Polygon' | 'Circle' | 'None'

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
  abstract enableDraw(type: GeoType, style?: Style | StyleLike | FlatStyle): void

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

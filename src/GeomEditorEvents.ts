/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-13 21:51:45
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-23 03:13:04
 * @Description : olGeometryEditor 自定义事件
 */
import { Collection, type Feature } from 'ol'
import type { Coordinate } from 'ol/coordinate'
import BaseEvent from 'ol/events/Event'
import type { Geometry } from 'ol/geom'
import { SelectEvent } from 'ol/interaction/Select'
import { TranslateEvent } from 'ol/interaction/Translate'
import { getDistance } from 'ol/sphere'

import type { GeometryData } from './GeomEditorI'

type CoordInfo = {
  coord: Coordinate
  coord3857: Coordinate
}
enum GeomEditorEventType {
  /**
   * Triggered SELECT feature
   * @event GeomEditorSelectEvent#select
   */
  SELECT = 'select',
  /**
   * Triggered DESELECT feature
   * @event GeomEditorSelectEvent#deselect
   * @api
   */
  DESELECT = 'deselect',

  DRAW_COMPLETE = 'drawComplete',
  DRAW_BEGIN = 'drawBegin',
  MOVE_START = 'moveStart',
  MOVE_END = 'moveEnd',
  MODIFY_BEGIN = 'modifyBegin',
  MODIFY_COMPLETE = 'modifyComplete',
  /**
   * 移除要素
   */
  REMOVE = 'remove',
  /**
   * 完成编辑
   */
  COMPLETE = 'complete',
}

class GeomEditorRemoveEvent extends BaseEvent {
  removeFeatures
  removeArray
  remainArray
  remainFeatures
  constructor(
    removeArray: GeometryData[],
    removeFeatures: Feature<Geometry>[],
    remainArray: GeometryData[],
    remainFeatures: Feature<Geometry>[],
  ) {
    super(GeomEditorEventType.REMOVE)
    this.removeArray = removeArray
    this.removeFeatures = removeFeatures
    this.remainArray = remainArray
    this.remainFeatures = remainFeatures
  }
}

class GeomEditorSelectEvent extends SelectEvent {
  selectArray
  selectData
  selectFeature
  constructor(
    type: GeomEditorEventType,
    selectArray: GeometryData[],
    selectData: GeometryData,
    select: Feature<Geometry>[],
    deselect: Feature<Geometry>[],
  ) {
    //@ts-ignore
    super(type, select, deselect)
    this.selectArray = selectArray
    this.selectFeature = select[0]
    this.selectData = selectData
  }
}

class GeomEditorDeselectEvent extends SelectEvent {
  deselectArray
  deselectData
  deselectFeature
  constructor(
    type: GeomEditorEventType,
    deselectArray: GeometryData[],
    deselectData: GeometryData,
    select: Feature<Geometry>[],
    deselect: Feature<Geometry>[],
  ) {
    //@ts-ignore
    super(type, select, deselect)
    this.deselectArray = deselectArray
    this.deselectFeature = deselect[0]
    this.deselectData = deselectData
  }
}

class GeomEditorDrawEvent extends BaseEvent {
  data
  feature
  startAt
  endAt
  allFeatures
  allData
  constructor(
    type: GeomEditorEventType,
    data: GeometryData | null,
    feature: Feature<Geometry>,
    startAt: CoordInfo,
    allData: GeometryData[],
    allFeatures: Feature<Geometry>[],
    endAt?: CoordInfo,
  ) {
    super(type)
    this.data = data
    this.allData = allData
    this.allFeatures = allFeatures
    this.feature = feature
    this.startAt = startAt
    this.endAt = endAt
  }
}

class GeomEditorMoveEvent extends TranslateEvent {
  dataArray
  startAt
  endAt
  constructor(
    type: GeomEditorEventType,
    dataArray: GeometryData[],
    features: Collection<Feature<Geometry>>,
    startAt: CoordInfo,
    endAt?: CoordInfo,
  ) {
    //@ts-ignore
    super(type, features, endAt?.coord3857 ?? [], startAt.coord3857)
    this.dataArray = dataArray
    this.features = features
    this.startAt = startAt
    this.endAt = endAt
  }
  get distance() {
    if (!this.endAt) return 0
    return getDistance(this.startAt.coord, this.endAt.coord)
  }
}

class GeomEditorModifyEvent extends BaseEvent {
  dataArray
  features
  constructor(type: GeomEditorEventType, dataArray: GeometryData[], features: Collection<Feature<Geometry>>) {
    super(type)
    this.dataArray = dataArray
    this.features = features
  }
}

class GeomEditorCompleteEvent extends BaseEvent {
  array
  features
  constructor(array: GeometryData[], features: Feature<Geometry>[]) {
    super(GeomEditorEventType.COMPLETE)
    this.array = array
    this.features = features
  }
}

type GeomEditorEventMap = {
  [GeomEditorEventType.SELECT]: (event: GeomEditorSelectEvent) => void
  [GeomEditorEventType.DESELECT]: (event: GeomEditorSelectEvent) => void
  [GeomEditorEventType.DRAW_COMPLETE]: (event: GeomEditorDrawEvent) => void
}

export {
  GeomEditorEventType,
  GeomEditorSelectEvent,
  GeomEditorDeselectEvent,
  GeomEditorRemoveEvent,
  GeomEditorCompleteEvent,
  GeomEditorDrawEvent,
  GeomEditorMoveEvent,
  GeomEditorModifyEvent,
  type GeomEditorEventMap,
}

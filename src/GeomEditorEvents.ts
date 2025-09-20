/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-13 21:51:45
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-14 02:57:27
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
enum GeoEditorEventType {
  /**
   * Triggered SELECT feature
   * @event GeoEditorSelectEvent#select
   */
  SELECT = 'select',
  /**
   * Triggered DESELECT feature
   * @event GeoEditorSelectEvent#deselect
   * @api
   */
  DESELECT = 'deselect',

  DRAW_COMPLETE = 'drawComplete',
  DRAW_BEGIN = 'drawBegin',
  MOVE_START = 'moveStart',
  MOVE_END = 'moveEnd',
  MODIFY_BEGIN = 'modifyBegin',
  MODIFY_COMPLETE = 'modifyComplete',
}

class GeoEditorSelectEvent extends SelectEvent {
  selectArray
  selectData
  selectFeature
  constructor(
    type: GeoEditorEventType,
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

class GeoEditorDeselectEvent extends SelectEvent {
  deselectArray
  deselectData
  deselectFeature
  constructor(
    type: GeoEditorEventType,
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

class GeoEditorDrawEvent extends BaseEvent {
  data
  feature
  startAt
  endAt
  allFeatures
  allData
  constructor(
    type: GeoEditorEventType,
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

class GeoEditorMoveEvent extends TranslateEvent {
  dataArray
  startAt
  endAt
  constructor(
    type: GeoEditorEventType,
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

class GeoEditorModifyEvent extends BaseEvent {
  dataArray
  features
  constructor(type: GeoEditorEventType, dataArray: GeometryData[], features: Collection<Feature<Geometry>>) {
    super(type)
    this.dataArray = dataArray
    this.features = features
  }
}
type GeoEditorEventMap = {
  [GeoEditorEventType.SELECT]: (event: GeoEditorSelectEvent) => void
  [GeoEditorEventType.DESELECT]: (event: GeoEditorSelectEvent) => void
  [GeoEditorEventType.DRAW_COMPLETE]: (event: GeoEditorDrawEvent) => void
}

export {
  GeoEditorEventType,
  GeoEditorSelectEvent,
  GeoEditorDeselectEvent,
  GeoEditorDrawEvent,
  GeoEditorMoveEvent,
  GeoEditorModifyEvent,
  type GeoEditorEventMap,
}

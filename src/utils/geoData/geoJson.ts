/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-04 01:05:34
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-13 20:22:50
 * @Description : geoJSON 相关函数
 */
import type { GeoJSON } from 'geojson'

export { isGeoJSONObj, isGeoJSON, getGeoJSONType }

/**
 * 判断一个对象是否为 GeoJSON 对象
 */
function isGeoJSONObj(obj: object): boolean {
  // if (isNil(obj) || !isPlainObject(obj)) return false
  if (obj == null || typeof obj !== 'object') return false
  const geo = obj
  if (typeof geo.type !== 'string') return false

  const type = geo.type

  const geometryTypes = [
    'Point',
    'LineString',
    'Polygon',
    'MultiPoint',
    'MultiLineString',
    'MultiPolygon',
    'GeometryCollection',
  ]

  if (geometryTypes.includes(type)) {
    if (type === 'GeometryCollection') {
      return Array.isArray(geo.geometries)
    }
    return Array.isArray(geo.coordinates)
  }

  if (type === 'Feature') {
    return geo.hasOwnProperty('geometry') && geo.hasOwnProperty('properties')
  }

  if (type === 'FeatureCollection') {
    if (!Array.isArray(geo.features)) return false
    return geo.features.every(f => isGeoJSONObj(f) && (f as object).type === 'Feature')
  }

  return false
}

function isGeoJSON(valString: string) {
  if (typeof valString !== 'string' || valString.trim() === '') {
    return false
  }
  // 清除字符串两端的空白，便于判断
  const trimmedString = valString.trim()

  // GeoJSON 必须以 { 开头
  if (trimmedString.startsWith('{')) {
    try {
      // 尝试解析为 JSON，确保格式有效
      const geoObj = JSON.parse(trimmedString)
      // GeoJSON 格式必须包含 "type" 字段
      if (isGeoJSONObj(geoObj)) {
        return true
      }
      return false
    } catch (e) {
      // 如果解析失败，说明不是有效的 GeoJSON
      return false
    }
  }
  return false
}

function getGeoJSONType(obj: GeoJSON): GeoJSON['type'] | null {
  if (!isGeoJSONObj(obj)) return null
  let type = (obj as any).type
  if (typeof type !== 'string') return null

  // 规范允许的 type
  const geojsonTypes: GeoJSON['type'][] = [
    'Point',
    'LineString',
    'Polygon',
    'MultiPoint',
    'MultiLineString',
    'MultiPolygon',
    'GeometryCollection',
    'Feature',
    'FeatureCollection',
  ]

  //@ts-ignore
  if (type === 'Feature' && obj.geometry?.type) {
    //@ts-ignore
    type = obj.geometry?.type
  }

  return geojsonTypes.includes(type as GeoJSON['type']) ? (type as GeoJSON['type']) : null
}

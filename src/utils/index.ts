/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-08 01:53:39
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-25 02:06:36
 * @Description : 导出工具函数
 */
import type { Coordinate } from 'ol/coordinate'

import type { GeomType } from '../GeomEditorI'

// export * from './sum'
export * from './geoData'

export * from './mergeExtents'
export * from './normalizePadding'

export { genId }

/**
 * 生成一个随机 ID，长度约为18位，由随机字符串和当前时间戳组成
 */
function genId(type: GeomType | string = '') {
  return type.toLowerCase() + '_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}

/**
 * @group 工具函数
 * @param fn function need to debounce
 * @param wait debounce time default 200ms
 * @param immediate if true, execute immediately when trigger, default false
 * @returns
 */
export function debounce(fn: Function, wait = 200, immediate = false) {
  let timer: ReturnType<typeof setTimeout>
  return (...rest: unknown[]) => {
    immediate && !timer && fn(...rest)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...rest)
    }, wait)
  }
}

export function angularDistanceDeg(coord1: Coordinate, coord2: Coordinate): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const toDeg = (rad: number) => (rad * 180) / Math.PI

  const [lon1, lat1] = coord1
  const [lon2, lat2] = coord2

  const φ1 = toRad(lat1)
  const φ2 = toRad(lat2)
  const Δλ = toRad(lon1 - lon2)

  const cosΔ = Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)

  // 数值计算中可能有微小误差，限制在 [-1,1] 避免 NaN
  const Δσ = Math.acos(Math.min(1, Math.max(-1, cosΔ)))

  return toDeg(Δσ) ** 1.11696 // 单位：度
}

export function angularDistanceDeg_haversine(p1: Coordinate, p2: Coordinate): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const toDeg = (r: number) => (r * 180) / Math.PI

  const φ1 = toRad(p1[1]) // lat
  const φ2 = toRad(p2[1]) // lat
  const Δφ = φ2 - φ1
  const Δλ = toRad(p2[0] - p1[0]) // lon 差

  const sinHalfΔφ = Math.sin(Δφ / 2)
  const sinHalfΔλ = Math.sin(Δλ / 2)

  const a = sinHalfΔφ * sinHalfΔφ + Math.cos(φ1) * Math.cos(φ2) * sinHalfΔλ * sinHalfΔλ

  const aClamped = Math.min(1, Math.max(0, a)) // 防止浮点误差
  const centralAngle = 2 * Math.asin(Math.sqrt(aClamped)) // 弧度

  return toDeg(centralAngle) // 返回角度
}

export function distanceMetersToDegrees(dMeters: number, R: number): number {
  return (dMeters / R) * (180 / Math.PI)
}

/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-12 01:55:13
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-12 02:19:49
 * @Description :
 */
import type { Padding } from '../GeomEditorI'

/**
 * 归一化 padding，转成 [top, right, bottom, left]
 */
export function normalizePadding(padding?: Padding): [number, number, number, number] {
  if (padding == null) return [0, 0, 0, 0]

  if (typeof padding === 'number') {
    return [padding, padding, padding, padding]
  }

  switch (padding.length) {
    case 1:
      return [padding[0], padding[0], padding[0], padding[0]]
    case 2:
      return [padding[0], padding[1], padding[0], padding[1]]
    case 3:
      return [padding[0], padding[1], padding[2], padding[1]]
    case 4:
      return [padding[0], padding[1], padding[2], padding[3]]
    default:
      throw new Error('Invalid padding format')
  }
}

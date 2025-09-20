import { type Extent, createEmpty, extend } from 'ol/extent'

/**
 * 合并多个 Extent，返回一个包含所有范围的总范围
 * @param extents Extent 数组
 * @returns 合并后的 Extent
 */
export function mergeExtents(extents: Extent[]): Extent {
  const result: Extent = createEmpty()
  let i = 0
  while (extents[i]) {
    extend(result, extents[i])
    i++
  }
  return result
}

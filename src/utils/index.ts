/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-08 01:53:39
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-24 01:31:57
 * @Description : 导出工具函数
 */
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

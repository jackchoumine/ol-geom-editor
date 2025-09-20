/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-04 01:03:45
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-13 18:39:53
 * @Description : WKT 相关函数
 */
export { isWKT, isEmptyWKT, getWKTType }

/**
 * 判断字符串是否为 WKT（Well-Known Text）格式（严格版，类型必须大写，支持 EMPTY）
 */
function isWKT(valString: string): boolean {
  if (typeof valString !== 'string') return false
  if (valString.trim() === '') {
    return false
  }

  let str = valString.trim()

  // 处理 SRID 前缀
  if (str.startsWith('SRID=')) {
    const parts = str.split(';')
    if (parts.length < 2) return false
    // @ts-ignore
    str = parts[1].trim()
  }

  const wktTypes = [
    'POINT',
    'LINESTRING',
    'POLYGON',
    'MULTIPOINT',
    'MULTILINESTRING',
    'MULTIPOLYGON',
    'GEOMETRYCOLLECTION',
  ]

  // 匹配类型和后续部分
  const typeMatch = /^([A-Z]+)(.*)$/s.exec(str) // s 修饰符支持多行
  if (!typeMatch) return false

  const type = typeMatch[1]
  // @ts-ignore
  const body = typeMatch[2].trim()

  // @ts-ignore
  if (!wktTypes.includes(type)) return false

  // === 1. 处理 EMPTY ===
  if (body === 'EMPTY') {
    return true
  }

  // === 2. 检查括号匹配 ===
  const openCount = (body.match(/\(/g) || []).length
  const closeCount = (body.match(/\)/g) || []).length
  if (openCount !== closeCount) return false

  // === 3. 针对 POINT 进行额外检查 ===
  if (type === 'POINT') {
    const coordsMatch = /\(([^()]+)\)/.exec(body)
    if (!coordsMatch) return false
    // @ts-ignore
    const coords = coordsMatch[1].trim().split(/\s+/)
    if (coords.length < 2) return false
    if (!coords.every(c => !isNaN(Number(c)))) return false
  }

  return true
}

function isEmptyWKT(valString: string): boolean {
  if (typeof valString !== 'string') return false
  if (valString.trim() === '') {
    return false
  }
  let str = valString.trim()

  // 处理 SRID 前缀
  if (str.startsWith('SRID=')) {
    const parts = str.split(';')
    if (parts.length < 2) return false
    // @ts-ignore
    str = parts[1].trim()
  }

  const wktTypes = [
    'POINT',
    'LINESTRING',
    'POLYGON',
    'MULTIPOINT',
    'MULTILINESTRING',
    'MULTIPOLYGON',
    'GEOMETRYCOLLECTION',
  ]

  // 匹配 "TYPE EMPTY"
  const match = /^([A-Z]+)\s+EMPTY$/.exec(str)
  if (!match) return false

  return wktTypes.includes(match[1])
}

function getWKTType(wkt: string): string | null {
  if (typeof wkt !== 'string') return null
  const trimmed = wkt.trim()
  if (!trimmed) return null

  // 去掉 SRID=xxxx; 前缀
  const sridRegex = /^SRID=\d+;/i
  const noSrid = trimmed.replace(sridRegex, '').trim()

  // 匹配类型关键字
  const match = noSrid.match(
    /^(POINT|LINESTRING|POLYGON|MULTIPOINT|MULTILINESTRING|MULTIPOLYGON|GEOMETRYCOLLECTION)\b/,
  )
  return match ? match[1] : null
}

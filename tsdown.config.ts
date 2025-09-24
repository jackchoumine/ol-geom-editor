/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-23 03:57:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-24 23:44:45
 * @Description : tsdown 打包配置
 */
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'browser',
  format: ['esm', 'iife'],
  dts: true,
  globalName: 'olGeomEditor', // 👈 浏览器全局变量名 window.olGeomEditor
  external: ['ol', /^ol($|\/)/], // 👈 不要打进 bundle
  outputOptions: {
    globals: {
      ol: 'ol',
      'ol/Collection': 'ol.Collection',
      'ol/Object': 'ol.Object',
      'ol/Observable': 'ol.Observable',
      'ol/extent': 'ol.extent',
      'ol/format': 'ol.format',
      'ol/geom': 'ol.geom',
      'ol/geom/Polygon': 'ol.geom.Polygon',
      'ol/interaction': 'ol.interaction',
      'ol/layer/Vector': 'ol.layer.Vector',
      'ol/proj': 'ol.proj',
      'ol/source/Vector': 'ol.source.Vector',
      'ol/sphere': 'ol.sphere',
      'ol/style': 'ol.style',
      'ol/events/Event': 'ol.events.Event',
      'ol/interaction/Select': 'ol.interaction.Select',
      'ol/interaction/Translate': 'ol.interaction.Translate',
    },
  },
})

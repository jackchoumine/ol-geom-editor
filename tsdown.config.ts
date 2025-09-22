import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  format: ['esm', 'iife'],
  dts: true,
  globalName: 'olGeomEditor', // 👈 浏览器全局变量名 window.olGeomEditor
  external: [/^ol($|\/)/], // 👈 不要打进 bundle
  outputOptions: {
    globals: {
      ol: 'ol',
    },
  },
})

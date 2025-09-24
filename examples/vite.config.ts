/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-24 02:26:10
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-25 02:24:48
 * @Description :
 */
// vite.config.js
import { defineConfig } from 'vite'
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html'

export default defineConfig({
  plugins: [vitePluginMdToHTML({ syntaxHighlighting: true })],
  build: {
    emptyOutDir: true,
  },
})

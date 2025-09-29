/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-09-24 02:26:10
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-09-29 11:22:29
 * @Description :
 */
// vite.config.js
import { defineConfig } from 'vite'
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html'

export default defineConfig({
  plugins: [
    vitePluginMdToHTML({
      syntaxHighlighting: true,
      highlightJs: {
        //register: { javaScript: 'javaScript' },
      },
    }),
  ],
  build: {
    emptyOutDir: true,
  },
})

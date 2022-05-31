/* global process */
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/cps-marketplace-layout/' : '/',
  dirStyle: 'nested',
  plugins: [
    vue({
      reactivityTransform: true
    }),
    svgLoader({
      svgo: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

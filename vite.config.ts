import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/template/',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: name => `../es/${name}/style/index`
      }]
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/',
    }
  },
  // 代理
  server: {
    proxy: {
      '/api': {
        target: 'https://qaq.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/static': {
        target: 'https://qaq.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})

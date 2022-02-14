import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
    open: true
  },
  
  define: {
    __API__: JSON.stringify('http://www.host.com')
  },  

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  // build: {
  // base: 'http://storage.360buyimg.com/djworkbench.public/jsbridge/version2',
  // },

  plugins: [vue()]
})

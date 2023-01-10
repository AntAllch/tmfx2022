import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Page1: resolve(__dirname, 'pages/page1.html'),
        // page2: resolve(__dirname, 'pages/page2.html'),
        // page3: resolve(__dirname, 'pages/page3.html')                
      }
    }
  }
})
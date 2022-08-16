import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        funding: resolve(__dirname, 'pages/funding.html'),
        guidelines: resolve(__dirname, 'pages/guidelines.html'),
        thankyou: resolve(__dirname, 'pages/thankyou.html')                
      }
    }
  }
})
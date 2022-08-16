import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        funding: resolve(__dirname, 'funding/funding.html'),
        guidelines: resolve(__dirname, 'guidelines/guidelines.html')                
      }
    }
  }
})
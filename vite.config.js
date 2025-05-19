import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
    port: 5501
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
}) 
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/arcade/',
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@@types', replacement: resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
    ],
  },
})

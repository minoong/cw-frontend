import path from 'path'

import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
 plugins: [vue()],
 test: {
  environment: 'jsdom',
 },
//  resolve: {
//   alias: {
//    '~': path.resolve(__dirname, './src'),
//   },
//  },
})

import path from 'path'

import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
 plugins: [react(), vue()],
 test: {
  environment: 'jsdom',
 },
})

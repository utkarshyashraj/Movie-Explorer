import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo name as base only when building in GitHub Actions
  base: process.env.GITHUB_ACTIONS ? '/Movie-Explorer/' : '/',
  server: {
    port: 3000,
    open: true
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tictactoe/',
  plugins: [react()],
  preview: {
    port: 3003,
    host: true,
    strictPort: true,
  },
  server: {
    port: 3003,
    host: true,
    strictPort: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/tic-tac-toe/",
  plugins: [react()],
  preview: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  server: {
    port: 3000,
    host:true,
    strictPort: true,
  },
})

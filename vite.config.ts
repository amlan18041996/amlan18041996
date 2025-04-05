import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/amlan18041996',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

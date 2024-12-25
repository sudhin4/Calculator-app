import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows the server to be accessed from other devices on the same network
    port: 5173, // Optional: Set a specific port (default is 5173)
  },
})

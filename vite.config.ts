import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@utils': path.resolve(__dirname, "./src/app/utils"),
      '@hooks': path.resolve(__dirname, "./src/app/hooks"),
      '@pages': path.resolve(__dirname, "./src/pages"),
      '@store': path.resolve(__dirname, "./src/store"),
      '@assets': path.resolve(__dirname, "./public/assets"),
    }
  },

})

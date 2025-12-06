import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Using '/' for custom domain - change to '/personalwebsite/' if using GitHub Pages subpath
export default defineConfig({
  plugins: [react()],
  base: '/',
})

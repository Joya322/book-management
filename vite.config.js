import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/book-management/",
  server: {
    open: "/book-management/", // ✅ opens correct local path automatically
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  // GitHub Pages-এর জন্য রিপোজিটরি নাম এবং অন্যদের জন্য রুট পাথ সেট করা হয়েছে
  base: process.env.NODE_ENV === 'production' ? '/moinul-portfolio4/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
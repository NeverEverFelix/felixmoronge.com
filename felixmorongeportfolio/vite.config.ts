import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site base path:
  // https://nevereverfelix.github.io/felixmoronge.com/
  base: '/felixmoronge.com/',
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

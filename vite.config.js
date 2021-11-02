import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Compound-Interest/",
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand
      // '/api': 'http://localhost:5000/students',
      // with options
      "/s1": {
        target: "https://pro-api.coinmarketcap.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/s1/, ""),
      }
      // // with RegEx
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
      // // Using the proxy instance
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   }
      // }
    },
  },
})

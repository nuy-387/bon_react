import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : '/', 
  plugins: [react()],
  // server의 proxy 설정
  // 5173 port -> 8088 port
  // 포트번호가 다를 경우 Cross-origin으로 간주하고 차단(CORS)
  server : {
    proxy : {
      '/api' : 'http://3.26.65.54:8088'
    }
  }
})

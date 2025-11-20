// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Pinimo/",
  
  // 🔽 여기에 build 설정을 추가합니다.
  build: {
    // 롤업(Rollup) 옵션 설정
    rollupOptions: {
      // 출력(Output) 설정
      output: {
        // 
        
        // **manualChunks를 정의하여 청크 분할**
        manualChunks(id) {
          // 'node_modules' 경로를 포함하는 모든 모듈을 
          // 'vendor'라는 이름의 별도 청크 파일로 분리합니다.
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
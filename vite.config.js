
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const cssFileName = 'index.min.css'

// export default defineConfig({
//   base: '/static/', 
//   plugins: [react()],
//   publicDir: './public',
//   build: {
//     cssCodeSplit: false, // Отключаем разделение CSS
//     rollupOptions: {
//       output: {
//         assetFileNames: (file) => {
//           if (file.name && file.name.endsWith('.css')) {
//             return `assets/css/${cssFileName}`;
//           }
//           return 'assets/[name].[ext]';
//         },
//         entryFileNames: (file) => {
//           return `assets/js/[name].min.js`;
//         },
//         chunkFileNames: 'assets/js/[name].min.js', // на всякий случай
//       },
//     },
//   },
// })






import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const cssFileName = 'index.min.css'
export default defineConfig({
  plugins: [react()],
  publicDir: './public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/css/${cssFileName}`
        },
        entryFileNames: (file) => {
          return `assets/js/[name].min.js`
        }
      }
    }
  }
    
})
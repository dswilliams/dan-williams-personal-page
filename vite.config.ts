import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/dan-williams-personal-page/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Fix for GitHub Pages MIME type issues
    rollupOptions: {
      output: {
        // This ensures ES modules work correctly on GitHub Pages
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})

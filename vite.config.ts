import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: {
      '@app': resolve(__dirname, 'src'),
      '#types': resolve(__dirname, 'src/shared/types'),
    },
  },
  plugins: [vue(), eslint()],
  server: {
    port: 1337,
    cors: true,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        format: 'es',
      },
    },
  },
});

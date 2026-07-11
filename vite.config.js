import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        menu: resolve(__dirname, 'src/menu.html'),
        workspaces: resolve(__dirname, 'src/workspaces.html'),
        location: resolve(__dirname, 'src/location.html'),
      }
    }
  }
});

import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/images": "http://localhost:7070",
      "/api": "http://localhost:7070",
    },
  },
  build: {
    outDir: "../server/build",
    emptyOutDir: true
  }
});

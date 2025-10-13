import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    port: 4444,
    open: true,
    host: "localhost",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "bundle.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

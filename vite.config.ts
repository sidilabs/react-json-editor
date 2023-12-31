import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.join(__dirname, "./src/components"),
      },
    ],
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});

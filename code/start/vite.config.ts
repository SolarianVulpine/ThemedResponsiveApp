import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import PinyVite from '@pinegrow/piny-vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), PinyVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tailwindcss(),
    compression({
      algorithm: "brotliCompress", // Use "gzip" for Gzip compression
      ext: ".br", // Change to ".gz" for Gzip
      threshold: 1024, // Compress files larger than 1KB
    }),
  ],
});

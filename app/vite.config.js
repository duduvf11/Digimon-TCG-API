import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import fs from "fs"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // ou 'brotliCompress'
      ext: '.gz', // extensão do arquivo comprimido
    }),
  ],
  server: {
    https: {
      key: fs.readFileSync('../backend/server.key'),
      cert: fs.readFileSync('../backend/server.cert'),
    },
  },
  base: "/Digimon-TCG-API"
})

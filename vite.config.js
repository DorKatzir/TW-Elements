import { defineConfig } from "vite"
import tailwindcss from "tailwindcss"

export default defineConfig({
  watch: {
    usePolling: true,
  },
plugins: [],
  css: {
   postcss: {
    plugins: [tailwindcss()],
   },
  },
});
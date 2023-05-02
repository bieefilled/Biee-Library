import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import url from "url";
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "libs/index.jsx"),
      name: "Biee UI",
      fileName: (format) => `biee-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react()],
});

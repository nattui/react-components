import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  format: ["cjs", "esm"],
  loader: { ".css": "copy" },
  sourcemap: true,
  splitting: true,
  treeshake: true,
})

import { defineConfig } from "tsdown"

export default defineConfig({
  clean: ["dist"],
  copy: [
    { from: "src/baseline", to: "dist" },
    { from: "src/colors", to: "dist" },
    { from: "src/tailwind-colors", to: "dist" },
    { from: "src/tailwind-tokenless", to: "dist" },
  ],
  css: {
    inject: true,
    modules: {
      generateScopedName: "[name]_[local]_[hash]",
    },
  },
  dts: {
    build: true,
  },
  entry: ["src/components/index.ts"],
  format: "esm",
  outDir: "dist/components",
  platform: "browser",
  unbundle: true,
})

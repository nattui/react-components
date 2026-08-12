import stylex from "@stylexjs/unplugin"
import { defineConfig } from "tsdown"

export default defineConfig({
  clean: ["dist"],
  copy: [
    { from: "src/baseline", to: "dist" },
    { from: "src/colors", to: "dist" },
    { from: "src/tailwind-colors", to: "dist" },
    { from: "src/tailwind-tokenless", to: "dist" },
  ],
  dts: {
    build: true,
  },
  entry: ["src/components/index.ts"],
  format: "esm",
  outDir: "dist/components",
  platform: "browser",
  plugins: [
    stylex.rolldown({
      cssInjectionTarget: (fileName) => fileName.includes("stylex.css"),
      useCSSLayers: {
        prefix: "components",
      },
    }),
  ],
  unbundle: true,
})

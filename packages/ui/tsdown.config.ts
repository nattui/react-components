import stylex from "@stylexjs/unplugin"
import { defineConfig } from "tsdown"

export default defineConfig({
  clean: ["dist"],
  copy: [
    { from: "src/baseline", to: "dist" },
    /* Only the CSS assets: .ts files in src/colors are compiled, not copied. */
    { from: "src/colors/accent", to: "dist/colors" },
    { from: "src/colors/index.css", to: "dist/colors" },
    { from: "src/colors/theme.css", to: "dist/colors" },
    { from: "src/colors/neutral", to: "dist/colors" },
    { from: "src/colors/semantic", to: "dist/colors" },
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

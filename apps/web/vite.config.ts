import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"
import { mdxComponentShowcases } from "#/mdx-component-showcases"

export default defineConfig({
  clearScreen: false,
  plugins: [
    // Order matters
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    mdxComponentShowcases(),
    mdx(),
    react(),
    tailwindcss(),
  ],
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
})

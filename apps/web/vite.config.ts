import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import expressiveCode from "satteri-expressive-code"
import { defineConfig } from "vite"
import satteri from "vite-plugin-satteri"
import { mdxComponentShowcases } from "#/mdx-component-showcases"
import { expressiveCodeOptions } from "#/utils/expressive-code"

export default defineConfig({
  clearScreen: false,
  plugins: [
    // Order matters
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    mdxComponentShowcases(),
    satteri({
      features: {
        frontmatter: true,
        gfm: true,
      },
      hastPlugins: [expressiveCode(expressiveCodeOptions)],
      mdx: {
        jsxImportSource: "react",
      },
    }),
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

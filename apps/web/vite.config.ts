import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import expressiveCode from "satteri-expressive-code"
import { defineConfig } from "vite"
import satteri from "vite-plugin-satteri"
import { mdxComponentShowcases } from "#/mdx-component-showcases"
import { expressiveCodeOptions } from "#/utils/expressive-code"
import { ENVIRONMENT } from "./src/utils/environment.ts"

export default defineConfig({
  clearScreen: false,
  plugins: [
    // Order matters
    tanstackStart(),
    nitro(),
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
    // nitro's preview server defaults to port 3000 and ignores the PORT env var that portless passes
    port: Number(ENVIRONMENT.PORT),
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    // portless proxies to 127.0.0.1 and passes HOST; without this, Bun binds "localhost" to ::1 only
    host: ENVIRONMENT.HOST,
  },
})

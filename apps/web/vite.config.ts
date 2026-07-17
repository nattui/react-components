import { htmlLinked } from "@lumis-sh/lumis/formatters"
import rehypeLumis, { type RehypeLumisOptions } from "@lumis-sh/rehype-lumis"
import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"
import { mdxComponentShowcases } from "#/mdx-component-showcases"

const REHYPE_LUMIS_OPTIONS: RehypeLumisOptions = {
  formatter: (language) => {
    const formatter = htmlLinked({ language })

    return {
      ...formatter,
      /* Fenced code ends with a newline, which Lumis would render as an empty last line. */
      format: (source) => formatter.format(source.trimEnd()),
    }
  },
  languages: [() => import("@lumis-sh/lumis/langs/javascript")],
}

export default defineConfig({
  clearScreen: false,
  plugins: [
    // Order matters
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    mdxComponentShowcases(),
    mdx({
      rehypePlugins: [[rehypeLumis, REHYPE_LUMIS_OPTIONS]],
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

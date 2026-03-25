import { cpSync } from "node:fs"
import { resolve } from "node:path"
import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  format: "esm",
  loader: {
    ".css": "copy",
  },
  onSuccess() {
    const root = process.cwd()
    const copies = [
      ["src/colors", "dist/colors"],
      ["src/tailwind-colors", "dist/tailwind-colors"],
      ["src/tailwind-tokenless", "dist/tailwind-tokenless"],
    ]

    for (const [from, to] of copies) {
      const src = resolve(root, from)
      const dst = resolve(root, to)
      cpSync(src, dst, { recursive: true })
      console.log(`[ui] copied ${from} -> ${to}`)
    }

    return Promise.resolve()
  },
  outDir: "dist/components",
})

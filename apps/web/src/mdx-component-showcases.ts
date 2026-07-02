import type { Plugin } from "vite"

const COMPONENT_SHOWCASE_MARKER = "// component"
const NO_CLOSING_FENCE_INDEX = -1

interface CodeFence {
  fence: string
  indent: string
}

function escapeRegExp(value: string): string {
  return value.replaceAll(/[.*+?^${}()|[\]\\]/gu, String.raw`\$&`)
}

function getCodeFence(line: string): CodeFence | undefined {
  const match = /^(?<indent>[ \t]*)(?<fence>`{3,}|~{3,}).*$/u.exec(line)
  const groups = match?.groups

  if (!groups) {
    return
  }

  return {
    fence: groups.fence,
    indent: groups.indent,
  }
}

function isClosingFence(line: string, openingFence: string, openingIndent: string): boolean {
  const closingFencePattern = new RegExp(
    `^${escapeRegExp(openingIndent)}${escapeRegExp(openingFence[0]).repeat(openingFence.length)}+$`,
    "u",
  )

  return closingFencePattern.test(line.trimEnd())
}

export function mdxComponentShowcases(): Plugin {
  return {
    enforce: "pre",
    name: "mdx-component-showcases",
    transform(code, id) {
      if (!id.includes(".mdx")) {
        return
      }

      const transformedCode = transformComponentShowcases(code)

      if (transformedCode === undefined) {
        return
      }

      return {
        code: transformedCode,
      }
    },
  }
}

function transformComponentShowcases(code: string): string | undefined {
  const lines = code.split("\n")
  const transformedLines: string[] = []
  let hasComponentShowcase = false

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const openingFence = getCodeFence(lines[lineIndex])

    if (openingFence) {
      const codeLines: string[] = []
      let closingFenceIndex = NO_CLOSING_FENCE_INDEX

      for (let codeLineIndex = lineIndex + 1; codeLineIndex < lines.length; codeLineIndex += 1) {
        const codeLine = lines[codeLineIndex]

        if (isClosingFence(codeLine, openingFence.fence, openingFence.indent)) {
          closingFenceIndex = codeLineIndex
          break
        }

        codeLines.push(codeLine)
      }

      if (closingFenceIndex === NO_CLOSING_FENCE_INDEX) {
        transformedLines.push(lines[lineIndex])
      } else {
        const codeContent = codeLines.join("\n")
        const trimmedCodeContent = codeContent.trim()
        const isComponentShowcase = trimmedCodeContent.startsWith(COMPONENT_SHOWCASE_MARKER)
        const componentSource = isComponentShowcase
          ? trimmedCodeContent.slice(COMPONENT_SHOWCASE_MARKER.length).trim()
          : ""

        if (isComponentShowcase && componentSource.length > 0) {
          hasComponentShowcase = true
          transformedLines.push(
            "<MdxComponentShowcase>",
            componentSource,
            "</MdxComponentShowcase>",
          )
        } else {
          transformedLines.push(lines[lineIndex], ...codeLines, lines[closingFenceIndex])
        }

        lineIndex = closingFenceIndex
      }
    } else {
      transformedLines.push(lines[lineIndex])
    }
  }

  if (!hasComponentShowcase) {
    return
  }

  return transformedLines.join("\n")
}

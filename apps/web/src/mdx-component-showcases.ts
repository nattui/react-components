import type { Plugin } from "vite"

const COMPONENT_SHOWCASE_MARKER = "// component"

interface CodeFence {
  fence: string
  indent: string
}

interface ReadFenceResult {
  closingIndex: number
  contentLines: string[]
  openingLine: string
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

function isShowcaseSource(contentLines: string[]): boolean {
  return contentLines.join("\n").trim().startsWith(COMPONENT_SHOWCASE_MARKER)
}

function readFenceAt(lines: string[], startIndex: number): ReadFenceResult | undefined {
  const openingFence = getCodeFence(lines[startIndex])

  if (!openingFence) {
    return
  }

  const contentLines: string[] = []

  for (let lineIndex = startIndex + 1; lineIndex < lines.length; lineIndex += 1) {
    if (isClosingFence(lines[lineIndex], openingFence.fence, openingFence.indent)) {
      return {
        closingIndex: lineIndex,
        contentLines,
        openingLine: lines[startIndex],
      }
    }

    contentLines.push(lines[lineIndex])
  }
}

function skipBlankLines(lines: string[], startIndex: number): number {
  let lineIndex = startIndex

  while (lineIndex < lines.length && lines[lineIndex].trim() === "") {
    lineIndex += 1
  }

  return lineIndex
}

function transformComponentShowcases(code: string): string | undefined {
  const lines = code.split("\n")
  const transformedLines: string[] = []
  let hasComponentShowcase = false

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const fence = readFenceAt(lines, lineIndex)

    if (fence) {
      const { closingIndex, contentLines, openingLine } = fence
      const trimmedCodeContent = contentLines.join("\n").trim()
      const isComponentShowcase = trimmedCodeContent.startsWith(COMPONENT_SHOWCASE_MARKER)
      const componentSource = isComponentShowcase
        ? trimmedCodeContent.slice(COMPONENT_SHOWCASE_MARKER.length).trim()
        : ""

      if (isComponentShowcase && componentSource.length > 0) {
        hasComponentShowcase = true

        const followingFence = readFenceAt(lines, skipBlankLines(lines, closingIndex + 1))
        const followingSourceFence =
          followingFence === undefined || isShowcaseSource(followingFence.contentLines)
            ? undefined
            : followingFence

        transformedLines.push(
          "<MdxComponentExample>",
          followingSourceFence === undefined
            ? "<MdxComponentShowcase>"
            : '<MdxComponentShowcase className="rounded-b-0!">',
          componentSource,
          "</MdxComponentShowcase>",
        )

        if (followingSourceFence) {
          transformedLines.push(
            "",
            followingSourceFence.openingLine,
            ...followingSourceFence.contentLines,
            lines[followingSourceFence.closingIndex],
          )
          lineIndex = followingSourceFence.closingIndex
        } else {
          lineIndex = closingIndex
        }

        transformedLines.push("</MdxComponentExample>")
      } else {
        transformedLines.push(openingLine, ...contentLines, lines[closingIndex])
        lineIndex = closingIndex
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

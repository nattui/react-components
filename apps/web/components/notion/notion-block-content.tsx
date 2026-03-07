import { evaluate } from "@mdx-js/mdx"
import { LucidePlus as IconPlus } from "@nattui/icons"
import {
  Button,
  ButtonLink,
  Column,
  Input,
  Label,
  Row,
  Spacer,
  Switch,
  Textarea,
} from "@nattui/react-components"
import Link from "next/link"
import type { ElementType, JSX } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { highlight } from "sugar-high"
import type { NotionBlock } from "@/components/notion/notion"
import { NotionRichTextSegments } from "@/components/notion/notion-rich-text-segments"

interface NotionBlockContentProps {
  block: NotionBlock
  blockIndex: number
}

export async function NotionBlockContent(props: NotionBlockContentProps): Promise<JSX.Element> {
  const { block, blockIndex } = props

  if (block.type === "h2") {
    return (
      <>
        <Spacer className="h-24" />
        <h2 className="text-gray-12 text-24 font-500 leading-[1.3]">
          <NotionRichTextSegments blockIndex={blockIndex} segments={block.segments} />
        </h2>
        <Spacer className="h-12" />
      </>
    )
  }

  if (block.type === "h3") {
    return (
      <>
        <Spacer className="h-24" />
        <h3 className="text-gray-12 text-20 font-500 leading-[1.4]">
          <NotionRichTextSegments blockIndex={blockIndex} segments={block.segments} />
        </h3>
        <Spacer className="h-12" />
      </>
    )
  }

  if (block.type === "paragraph") {
    return (
      <>
        <p className="text-gray-12 text-16 leading-1-625">
          <NotionRichTextSegments blockIndex={blockIndex} segments={block.segments} />
        </p>
        <Spacer className="h-24" />
      </>
    )
  }

  if (block.type === "image") {
    return (
      <>
        {/* Notion serves image URLs from varying hosts, so render a plain image tag. */}
        {/* oxlint-disable-next-line @next/next/no-img-element */}
        <img alt={block.alt} className="rounded-12 h-auto w-full" loading="lazy" src={block.url} />
        <Spacer className="h-24" />
      </>
    )
  }

  if (block.type === "code") {
    const codeHTML = highlight(block.code)
    const mappedComponentElements = await renderMappedComponents(block.code)

    if (mappedComponentElements) {
      return (
        <>
          {/* Showcase component */}
          <div className="rounded-12 bg-gray-2 border-gray-4 flex flex-wrap items-center justify-center gap-16 border px-16 py-48">
            {mappedComponentElements}
          </div>
          <Spacer className="h-24" />
        </>
      )
    }

    return (
      <>
        <pre className="rounded-12 bg-gray-2 border-gray-4 text-13 overflow-x-auto border p-16 whitespace-break-spaces">
          {/* oxlint-disable-next-line react/no-danger */}
          <code aria-label={block.language} dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </pre>
        <Spacer className="h-24" />
      </>
    )
  }

  // oxlint-disable-next-line react/jsx-no-useless-fragment returns empty fragment for typescript
  return <></>
}

const COMPONENT_MARKER = "// component"

const components: Record<string, ElementType> = {
  Button,
  ButtonLink,
  Column,
  IconPlus,
  Input,
  Label,
  Link,
  Row,
  Spacer,
  Switch,
  Textarea,
}

async function renderMappedComponents(code: string): Promise<JSX.Element | undefined> {
  const trimmedCode = code.trim()

  if (!trimmedCode.startsWith(COMPONENT_MARKER)) {
    return
  }

  const mdxSource = trimmedCode.slice(COMPONENT_MARKER.length).trim()
  if (!mdxSource) {
    return
  }

  const scopedMdxSource = scopeMappedComponentReferences(mdxSource)
  try {
    const evaluated = await evaluate(scopedMdxSource, {
      Fragment,
      development: false,
      jsx,
      jsxs,
    })
    const MdxContent = evaluated.default
    return <MdxContent components={components} />
  } catch {
    // Invalid component markup falls back to the highlighted code block renderer.
  }
}

function scopeMappedComponentReferences(mdxSource: string): string {
  // MDX expressions like `as={Link}` resolve identifiers lexically, not from `components`.
  // Rewrite mapped references to `props.components.*` so evaluated snippets can resolve them.
  const componentReferencePattern = new RegExp(
    `=\\{\\s*(${Object.keys(components)
      .map((componentName) => componentName.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`))
      .join("|")})\\s*\\}`,
    "g",
  )

  return mdxSource.replaceAll(
    componentReferencePattern,
    (_match, componentName) => `={props.components.${componentName}}`,
  )
}

import { evaluate } from "@mdx-js/mdx"
import {
  Button,
  ButtonLink,
  Column,
  Input,
  Label,
  TabsPillList,
  TabsPillTab,
  Row,
  Spacer,
  Tabs,
  TabsUnderlineList,
  TabsUnderlineTab,
  TabsPanel,
  Switch,
  Textarea,
} from "@nattstack/ui/react"
import { LucidePlus as IconPlus } from "@nattui/icons"
import Link from "next/link"
import type { ElementType, JSX } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { highlight } from "sugar-high"
import type { NotionBlock, NotionRichTextSegment } from "@/components/notion/notion"
import { NotionRichTextSegments } from "@/components/notion/notion-rich-text-segments"

interface NotionBlockContentProps {
  block: NotionBlock
  blockIndex: number
}

interface RenderHeadingProps {
  blockIndex: number
  className: string
  level: "h1" | "h2" | "h3"
  segments: NotionRichTextSegment[]
}

export async function NotionBlockContent(props: NotionBlockContentProps): Promise<JSX.Element> {
  const { block, blockIndex } = props

  if (block.type === "h2") {
    return renderHeading({
      blockIndex,
      className: "text-gray-12 text-24 font-500 leading-[1.3]",
      level: "h2",
      segments: block.segments,
    })
  }

  if (block.type === "h3") {
    return renderHeading({
      blockIndex,
      className: "text-gray-12 text-20 font-500 leading-[1.4]",
      level: "h3",
      segments: block.segments,
    })
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
    const linkCards = renderLinkCards(block.code)

    if (linkCards) {
      return (
        <>
          <div className="flex flex-wrap gap-8">{linkCards}</div>
          <Spacer className="h-8" />
        </>
      )
    }

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

    const codeHTML = highlight(block.code)

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

function getHeadingId(segments: NotionRichTextSegment[], blockIndex: number): string {
  const headingText = getHeadingText(segments)

  const headingSlug = headingText
    .toLowerCase()
    .normalize("NFKD")
    .replaceAll(/[\u0300-\u036F]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "")

  return headingSlug || `heading-${blockIndex}`
}

function getHeadingText(segments: NotionRichTextSegment[]): string {
  return segments
    .map((segment) => segment.text)
    .join("")
    .trim()
}

function renderHeading(props: RenderHeadingProps): JSX.Element {
  const { blockIndex, className, level, segments } = props

  const Heading = level
  const headingText = getHeadingText(segments)
  const headingId = getHeadingId(segments, blockIndex)

  return (
    <>
      <Spacer className="h-24" />
      <Heading className={`${className} group scroll-mt-[80px]`} id={headingId}>
        <a
          aria-label={headingText ? `Link to ${headingText}` : "Link to heading"}
          className="relative inline-block max-w-full no-underline"
          href={`#${headingId}`}
        >
          <span
            aria-hidden
            className="text-gray-10 pointer-events-none absolute top-0 right-full pr-8 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
          >
            #
          </span>
          {renderHeadingSegments(blockIndex, segments)}
        </a>
      </Heading>
      <Spacer className="h-12" />
    </>
  )
}

function renderHeadingSegments(
  blockIndex: number,
  segments: NotionRichTextSegment[],
): JSX.Element[] {
  return segments.map((segment, segmentIndex) => {
    // The surrounding heading link owns hash navigation, so avoid nested anchors here.
    let segmentContent: JSX.Element | string = segment.text

    if (segment.code) {
      segmentContent = (
        <code className="rounded-4 bg-gray-3 text-14 px-4 py-2 font-mono">{segmentContent}</code>
      )
    }

    if (segment.bold) {
      segmentContent = <strong>{segmentContent}</strong>
    }

    if (segment.italic) {
      segmentContent = <em>{segmentContent}</em>
    }

    if (segment.strikethrough) {
      segmentContent = <s>{segmentContent}</s>
    }

    if (segment.underline) {
      segmentContent = <u>{segmentContent}</u>
    }

    return <span key={`${blockIndex}-${segmentIndex}`}>{segmentContent}</span>
  })
}

const LINKS_MARKER = "// links"
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
  Tabs,
  TabsPanel,
  TabsPillList,
  TabsPillTab,
  TabsUnderlineList,
  TabsUnderlineTab,
  Textarea,
}

interface LinkCard {
  badge: string
  href: string
  label: string
  meta: string
}

function formatLinkMeta(href: string): string {
  if (href.startsWith("/")) {
    return href
  }
  try {
    const url = new URL(href)
    const hostname = url.hostname.replace(/^www\./, "")
    const pathname = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "")
    return `${hostname}${pathname}`
  } catch {
    return href
  }
}

function inferLinkBadge(label: string, href: string): string {
  const normalizedText = `${label} ${href}`.toLowerCase()
  if (normalizedText.includes("github")) {
    return "GH"
  }
  if (normalizedText.includes("figma")) {
    return "FG"
  }
  if (normalizedText.includes("story")) {
    return "SB"
  }
  if (normalizedText.includes("download")) {
    return "DL"
  }
  const compactLabel = label.replaceAll(/[^a-z0-9]/gi, "").toUpperCase()
  return compactLabel.length >= 2 ? compactLabel.slice(0, 2) : "LK"
}

function inferLinkLabel(href: string): string {
  const normalizedHref = href.toLowerCase()
  if (normalizedHref.includes("github")) {
    return "GitHub"
  }
  if (normalizedHref.includes("figma")) {
    return "Figma"
  }
  if (normalizedHref.includes("story")) {
    return "Storybook"
  }
  return "Link"
}

function isExternalHref(href: string): boolean {
  return /^(?:https?:\/\/|mailto:)/.test(href)
}

function isLinkHref(segment: string): boolean {
  return /^(?:https?:\/\/|mailto:|\/)/.test(segment)
}

function parseLinkCard(line: string): LinkCard | undefined {
  const trimmedLine = line.trim()
  if (trimmedLine.length === 0 || trimmedLine.startsWith("//")) {
    return
  }
  const segments = trimmedLine
    .split("::")
    .map((segment) => segment.trim())
    .filter(Boolean)
  if (segments.length === 0) {
    return
  }
  const hrefIndex = segments.findIndex((segment) => isLinkHref(segment))
  if (hrefIndex === -1) {
    return
  }
  const href = segments[hrefIndex]
  const textSegments = segments.filter((_segment, index) => index !== hrefIndex)
  const label = textSegments[0] ?? inferLinkLabel(href)
  return {
    badge: inferLinkBadge(label, href),
    href,
    label,
    meta: textSegments[1] ?? formatLinkMeta(href),
  }
}

function parseLinkCards(code: string): LinkCard[] | undefined {
  const trimmedCode = code.trim()
  if (!trimmedCode.startsWith(LINKS_MARKER)) {
    return
  }
  const linkCards = trimmedCode
    .slice(LINKS_MARKER.length)
    .split("\n")
    .flatMap((line) => {
      const linkCard = parseLinkCard(line)
      return linkCard ? [linkCard] : []
    })
  if (linkCards.length === 0) {
    return
  }
  return linkCards
}

function renderLinkCards(code: string): JSX.Element[] | undefined {
  const linkCards = parseLinkCards(code)
  if (!linkCards) {
    return
  }
  return linkCards.map((linkCard) => {
    const isExternal = isExternalHref(linkCard.href)
    return (
      <a
        className="bg-gray-2 border-gray-4 hover:bg-gray-3 group inline-flex max-w-full items-center gap-6 rounded-full border px-6 py-4 transition-colors"
        href={linkCard.href}
        key={`${linkCard.label}-${linkCard.href}`}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        <div className="bg-gray-1 border-gray-4 text-gray-11 group-hover:text-gray-12 text-13 font-500 flex size-24 shrink-0 items-center justify-center rounded-full border font-mono uppercase transition-colors">
          {linkCard.badge}
        </div>
        <p className="text-gray-12 text-13 font-500 min-w-0 truncate pr-2 leading-none whitespace-nowrap">
          {linkCard.label}
        </p>
      </a>
    )
  })
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

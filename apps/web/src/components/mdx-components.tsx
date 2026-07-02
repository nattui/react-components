// oxlint-disable id-length
// oxlint-disable react/only-export-components

import type { MDXComponents } from "mdx/types"
import type { ComponentProps, CSSProperties, JSX } from "react"
import { generate, tokenize } from "sugar-high"
import { c, css, go, java, python, rust } from "sugar-high/presets"

interface HighlightLine {
  children: HighlightToken[]
  properties: {
    className: string
  }
}

type HighlightOptions = NonNullable<Parameters<typeof tokenize>[1]>

interface HighlightToken {
  children: [
    {
      value: string
    },
  ]
  properties: {
    className: string
    style?: CSSProperties
  }
}

type MdxComponentShowcaseProps = ComponentProps<"div">

const LANGUAGE_PRESETS: Record<string, HighlightOptions> = {
  c,
  css,
  go,
  java,
  py: python,
  python,
  rs: rust,
  rust,
}

export const MDX_COMPONENTS: MDXComponents = {
  MdxComponentShowcase,
  a: MdxAnchor,
  blockquote: MdxBlockquote,
  code: MdxCode,
  em: MdxEm,
  h1: MdxHeading1,
  h2: MdxHeading2,
  h3: MdxHeading3,
  li: MdxListItem,
  ol: MdxOrderedList,
  p: MdxParagraph,
  pre: MdxPre,
  ul: MdxUnorderedList,
}

export function MdxComponentShowcase(props: MdxComponentShowcaseProps): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <div
      className={joinClassNames(
        "mb-24 flex flex-wrap items-center justify-center gap-16 rounded-16 border border-gray-4 px-16 py-48 bg-bg-shell-outer",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

function getCodeLanguage(className: string | undefined): string | undefined {
  return className?.match(/(?:^|\s)language-(?<language>[\w-]+)/u)?.groups?.language
}

function getCodeText(children: ComponentProps<"code">["children"]): string | undefined {
  if (typeof children === "string") {
    return children
  }

  if (typeof children === "number") {
    return String(children)
  }

  return undefined
}

function highlightCode(code: string, language: string): JSX.Element[] {
  const normalizedCode = code.replace(/\r?\n$/u, "")
  const lines = generate(
    tokenize(normalizedCode, LANGUAGE_PRESETS[language] ?? undefined),
  ) as HighlightLine[]

  return lines.map((line, lineIndex) => (
    <span className={line.properties.className} key={lineIndex}>
      {line.children.map((token, tokenIndex) => (
        <span
          className={token.properties.className}
          key={tokenIndex}
          style={token.properties.style}
        >
          {token.children[0].value}
        </span>
      ))}
    </span>
  ))
}

function joinClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(" ")
}

function MdxAnchor(props: ComponentProps<"a">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <a
      className={joinClassNames("ui-link", className)}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
}

function MdxBlockquote(props: ComponentProps<"blockquote">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <blockquote className={joinClassNames("[&>p]:mb-0 mb-24", className)} {...rest}>
      {children}
    </blockquote>
  )
}

function MdxCode(props: ComponentProps<"code">): JSX.Element {
  const { children, className, ...rest } = props
  const language = getCodeLanguage(className)
  const code = getCodeText(children)

  if (language !== undefined && code !== undefined) {
    return (
      <code
        className={joinClassNames("block min-w-full font-code text-13", className)}
        data-language={language}
        {...rest}
      >
        {highlightCode(code, language)}
      </code>
    )
  }

  return (
    <code
      className={joinClassNames(
        "rounded-4 bg-gray-3 px-4 py-2 font-code text-14 text-text-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </code>
  )
}

function MdxEm(props: ComponentProps<"em">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <em className={joinClassNames("font-handwriting not-italic text-20", className)} {...rest}>
      {children}
    </em>
  )
}

function MdxHeading1(props: ComponentProps<"h1">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <h1 className={joinClassNames("mb-16 text-30 text-pretty", className)} {...rest}>
      {children}
    </h1>
  )
}

function MdxHeading2(props: ComponentProps<"h2">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <h2 className={joinClassNames("mb-24 text-24", className)} {...rest}>
      {children}
    </h2>
  )
}

function MdxHeading3(props: ComponentProps<"h3">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <h3
      className={joinClassNames("mt-48 mb-16 text-24 leading-32 text-text-primary", className)}
      {...rest}
    >
      {children}
    </h3>
  )
}

function MdxListItem(props: ComponentProps<"li">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <li
      className={joinClassNames(
        "pl-4 [&>ol]:mt-4 [&>ol]:mb-0 [&>p]:mb-0 [&>ul]:mt-4 [&>ul]:mb-0",
        className,
      )}
      {...rest}
    >
      {children}
    </li>
  )
}

function MdxOrderedList(props: ComponentProps<"ol">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <ol className={joinClassNames("mb-24 list-decimal space-y-8 pl-24", className)} {...rest}>
      {children}
    </ol>
  )
}

function MdxParagraph(props: ComponentProps<"p">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <p className={joinClassNames("mb-24 text-16/1-875 text-pretty", className)} {...rest}>
      {children}
    </p>
  )
}

function MdxPre(props: ComponentProps<"pre">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <pre
      className={joinClassNames(
        "mb-24 overflow-x-auto rounded-16 bg-bg-shell-outer border border-border p-16 text-14",
        className,
      )}
      {...rest}
    >
      {children}
    </pre>
  )
}

function MdxUnorderedList(props: ComponentProps<"ul">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <ul className={joinClassNames("mb-24 list-disc space-y-8 pl-24", className)} {...rest}>
      {children}
    </ul>
  )
}

// oxlint-disable id-length
// oxlint-disable react/only-export-components

import { IconChevronDownOutline18 } from "@nattstack/icons"
import { Spacer } from "@nattstack/ui"
import type { MDXComponents } from "mdx/types"
import {
  type ComponentProps,
  isValidElement,
  type JSX,
  type ReactNode,
  useId,
  useState,
} from "react"

type MdxComponentExampleProps = ComponentProps<"div">
type MdxComponentShowcaseProps = ComponentProps<"div">

export const MDX_COMPONENTS: MDXComponents = {
  MdxComponentExample,
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

export function MdxComponentExample(props: MdxComponentExampleProps): JSX.Element {
  const { children, className, ...rest } = props

  const [showCode, setShowCode] = useState(false)

  const codeId = useId()
  const [preview, ...code] = getElementChildren(children)
  const hasCode = code.length > 0

  function handleToggleCode(): void {
    setShowCode((current) => !current)
  }

  return (
    <div className={joinClassNames("mb-24 [&_.expressive-code]:mb-0", className)} {...rest}>
      {preview}

      {hasCode ? (
        <button
          aria-controls={codeId}
          aria-expanded={showCode}
          className="
            flex h-40 w-full items-center justify-center gap-8 rounded-b-16
            border border-t-0 border-neutral-4 bg-bg-shell-outer text-14
            text-neutral-11
            hover:bg-neutral-3 hover:text-neutral-12
          "
          onClick={handleToggleCode}
          type="button"
        >
          {showCode ? "Hide code" : "Show code"}
          <IconChevronDownOutline18
            className={joinClassNames(
              "transition-transform duration-150",
              showCode ? "rotate-180" : undefined,
            )}
          />
        </button>
      ) : undefined}

      {hasCode ? (
        <div hidden={!showCode} id={codeId}>
          <Spacer height={16} />

          {code}
        </div>
      ) : undefined}
    </div>
  )
}

export function MdxComponentShowcase(props: MdxComponentShowcaseProps): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <div
      className={joinClassNames(
        "w-full min-w-0 overflow-x-auto rounded-16 border border-neutral-4 bg-bg-shell-outer bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]",
        className,
      )}
      {...rest}
    >
      <div
        className="
          flex w-max min-w-full flex-wrap items-center justify-center gap-16
          px-24 py-48
        "
      >
        {children}
      </div>
    </div>
  )
}

function getCodeLanguage(className: string | undefined): string | undefined {
  return className?.match(/(?:^|\s)language-(?<language>[\w-]+)/u)?.groups?.language
}

function getElementChildren(node: ReactNode): JSX.Element[] {
  if (Array.isArray(node)) {
    return node.flatMap((child) => getElementChildren(child))
  }

  if (isValidElement(node)) {
    return [node]
  }

  return []
}

function hasElementChild(node: ReactNode): boolean {
  if (Array.isArray(node)) {
    return node.some((child) => hasElementChild(child))
  }

  return isValidElement(node)
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

  // Fenced blocks (Expressive Code) render element children; only style true inline code.
  if (language !== undefined || hasElementChild(children)) {
    return (
      <code className={className} data-language={language} {...rest}>
        {children}
      </code>
    )
  }

  return (
    <code
      className={joinClassNames("rounded-4 bg-neutral-4/75 px-4 py-2 font-code text-14", className)}
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
    <h1 className={joinClassNames("mb-16 text-36 text-pretty", className)} {...rest}>
      {children}
    </h1>
  )
}

function MdxHeading2(props: ComponentProps<"h2">): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <h2 className={joinClassNames("mb-12 mt-56 text-24", className)} {...rest}>
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
    <p
      className={joinClassNames(
        "mb-24 text-16 leading-1-875 text-pretty text-text-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}

function MdxPre(props: ComponentProps<"pre">): JSX.Element {
  const { children, className, ...rest } = props

  // Fenced blocks are wrapped by Expressive Code; leave framing to that plugin.
  return (
    <pre className={className} {...rest}>
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

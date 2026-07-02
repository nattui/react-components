import type { JSX, ReactNode } from "react"
import type { NotionRichTextSegment } from "@/components/notion/notion"

interface NotionRichTextSegmentsProps {
  blockIndex: number
  segments: NotionRichTextSegment[]
}

export function NotionRichTextSegments(props: NotionRichTextSegmentsProps): JSX.Element[] {
  const { blockIndex, segments } = props

  return segments.map((segment, segmentIndex) => {
    let segmentContent: ReactNode = segment.text

    if (segment.code) {
      segmentContent = (
        <code className="rounded-4 bg-gray-3 px-4 py-2 font-mono text-14">{segmentContent}</code>
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

    if (segment.href) {
      return (
        <a
          className="
            underline decoration-gray-9 decoration-1 underline-offset-2
            hover:no-underline
          "
          href={segment.href}
          key={`${blockIndex}-${segmentIndex}`}
          rel="noreferrer"
          target="_blank"
        >
          {segmentContent}
        </a>
      )
    }

    return <span key={`${blockIndex}-${segmentIndex}`}>{segmentContent}</span>
  })
}

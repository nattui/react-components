interface SpacerProps {
  className?: string
}

export function Spacer(props: SpacerProps) {
  const { className = "" } = props

  return <div className={`shrink-0 ${className}`.trim()} />
}

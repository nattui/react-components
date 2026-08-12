import * as stylex from "@stylexjs/stylex"
import type { CompiledStyles, InlineStyles, StyleXArray } from "@stylexjs/stylex"

type StylexStyle = StyleXArray<
  boolean | CompiledStyles | false | null | Readonly<[CompiledStyles, InlineStyles]> | undefined
>

/**
 * Join class names, dropping empty values.
 *
 * `cn` is short for class names.
 *
 * @param {unknown[]} values - Class strings and optional empty values to ignore.
 * @returns {string} A single space-separated class string.
 */
export function cn(...values: unknown[]): string {
  return values
    .filter((value): value is string => typeof value === "string" && value !== "")
    .join(" ")
}

export function sx(...styles: StylexStyle[]): string {
  return (
    (stylex.props as (...args: StylexStyle[]) => { className?: string })(...styles).className ?? ""
  )
}

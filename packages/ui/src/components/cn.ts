import * as stylex from "@stylexjs/stylex"
import type { CompiledStyles, InlineStyles, StyleXArray } from "@stylexjs/stylex"

type StylexStyle = StyleXArray<
  boolean | CompiledStyles | false | null | Readonly<[CompiledStyles, InlineStyles]> | undefined
>

/**
 * Compile StyleX styles and join class names, dropping empty values.
 *
 * `cn` is short for class names.
 *
 * @param {unknown[]} values - StyleX styles, class strings, and optional empty values to ignore.
 * @returns {string} A single space-separated class string.
 */
export function cn(...values: unknown[]): string {
  const stylexStyles: StylexStyle[] = []
  const classNames: string[] = []

  for (const value of values) {
    if (typeof value === "string") {
      if (value !== "") {
        classNames.push(value)
      }
    } else if (typeof value !== "function") {
      stylexStyles.push(value as StylexStyle)
    }
  }

  const compiled =
    stylexStyles.length === 0
      ? ""
      : ((stylex.props as (...args: StylexStyle[]) => { className?: string })(...stylexStyles)
          .className ?? "")

  return [compiled, ...classNames].filter((value) => value !== "").join(" ")
}

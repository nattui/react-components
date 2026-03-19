/**
 * Collapses consecutive whitespace characters into single spaces and trims
 * leading and trailing whitespace.
 *
 * @param {string} value - The string to normalize.
 * @returns {string} The normalized string with excess whitespace removed.
 */
export function normalizeWhitespace(value: string): string {
  return value.replaceAll(/\s+/g, " ").trim()
}

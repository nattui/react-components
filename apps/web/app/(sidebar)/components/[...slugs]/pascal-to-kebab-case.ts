export function pascalToKebabCase(value: string): string {
  return value
    .trim()
    .replaceAll(/([A-Z]+)([A-Z][a-z])/gu, "$1-$2")
    .replaceAll(/([a-z0-9])([A-Z])/gu, "$1-$2")
    .replaceAll(/[\s_]+/gu, "-")
    .replaceAll(/-+/gu, "-")
    .toLowerCase()
}

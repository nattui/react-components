export function pascalToKebabCase(value: string) {
  return value
    .trim()
    .replaceAll(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replaceAll(/[\s_]+/g, "-")
    .replaceAll(/-+/g, "-")
    .toLowerCase()
}

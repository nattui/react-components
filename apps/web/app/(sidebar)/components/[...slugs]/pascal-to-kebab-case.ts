export function pascalToKebabCase(value: string): string {
  return value
    .trim()
    .replaceAll(/(?<acronym>[A-Z]+)(?<word>[A-Z][a-z])/gu, "$<acronym>-$<word>")
    .replaceAll(/(?<prefix>[a-z0-9])(?<suffix>[A-Z])/gu, "$<prefix>-$<suffix>")
    .replaceAll(/[\s_]+/gu, "-")
    .replaceAll(/-+/gu, "-")
    .toLowerCase()
}

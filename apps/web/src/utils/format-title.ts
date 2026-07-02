export function formatTitle(name: string): string {
  const words = name.replaceAll(/(?<lower>[a-z])(?<upper>[A-Z])/gu, "$<lower> $<upper>").split(" ")

  if (words.length === 1) {
    return name
  }

  return [words[0], ...words.slice(1).map((word) => word.toLowerCase())].join(" ")
}

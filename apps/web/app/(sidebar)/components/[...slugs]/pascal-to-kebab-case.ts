export function pascalToKebabCase(value: string): string {
  const trimmedValue = value.trim()
  let kebabValue = ""

  for (let index = 0; index < trimmedValue.length; index += 1) {
    const character = trimmedValue[index]

    if (/[\s_]/u.test(character)) {
      kebabValue += "-"
    } else {
      const previousCharacter = trimmedValue[index - 1]
      const nextCharacter = trimmedValue[index + 1]
      const isUppercase = /[A-Z]/u.test(character)
      const previousIsLowercaseOrDigit = /[a-z0-9]/u.test(previousCharacter ?? "")
      const previousIsUppercase = /[A-Z]/u.test(previousCharacter ?? "")
      const nextIsLowercase = /[a-z]/u.test(nextCharacter ?? "")

      if (
        kebabValue.length > 0 &&
        !kebabValue.endsWith("-") &&
        isUppercase &&
        (previousIsLowercaseOrDigit || (previousIsUppercase && nextIsLowercase))
      ) {
        kebabValue += "-"
      }

      kebabValue += character
    }
  }

  return kebabValue.replaceAll(/-+/gu, "-").toLowerCase()
}

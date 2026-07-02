// oxlint-disable no-promise-executor-return promise/avoid-new

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

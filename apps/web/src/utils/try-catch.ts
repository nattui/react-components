type TryCatchResult<TData> = { data: TData; error: undefined } | { data: undefined; error: unknown }

export async function tryCatch<TData>(
  operation: () => Promise<TData> | TData,
): Promise<TryCatchResult<TData>> {
  try {
    const data = await operation()
    return { data, error: undefined }
  } catch (error) {
    return { data: undefined, error }
  }
}

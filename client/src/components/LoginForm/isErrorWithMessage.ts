const isErrorWithMessage = (
  error: unknown
): error is { data: {message: string} } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'data' in error &&
    typeof (error as any).data === 'object' &&
    error != null &&
    'message' in (error as any).data &&
    typeof (error as any).data.message === 'string'
  )
}

export default isErrorWithMessage

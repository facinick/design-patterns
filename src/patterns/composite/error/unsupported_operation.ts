class UnsupportedOperationError extends Error {
  public static DEFAULT_ERROR_MESSAGE = `The operation you're trying to do is not permitted.`
  constructor(message?: string) {
    super(message)
    this.name = 'Unsupported Operation Error'
    this.stack = (new Error()).stack;
  }
}

export default UnsupportedOperationError
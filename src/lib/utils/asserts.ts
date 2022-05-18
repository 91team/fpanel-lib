export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val == null) {
    console.error('assertion error')
    throw new Error(`Expected 'val' to be defined, but received ${val}`)
  }
}

export function assert(value: boolean): asserts value {
  if (value !== true) {
    console.error('assertion error')
    throw new Error(`assertion error`)
  }
}

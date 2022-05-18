export type ObjectRef<T> = {
  __brand: T
}

export function createGlobalObjectRef<T>(): ObjectRef<T> {
  // @ts-expect-error
  return {}
}

const globals = new Map()

export function setGlobal<T>(key: ObjectRef<T>, data: T) {
  if (globals.has(key)) {
    throw new Error('already initialized')
  }

  globals.set(key, data)
}

export function getGlobal<T>(key: ObjectRef<T>): T {
  if (!globals.has(key)) {
    throw new Error('unknown key')
  }

  return globals.get(key)
}

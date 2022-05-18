import { useContext, useEffect, useRef } from 'react'

import { IDisposable, InjectableConstructor } from './container'
import { DIContext } from './context'

export function useCreateTransient<T extends IDisposable>(arg: InjectableConstructor<T>) {
  const container = useContext(DIContext)

  const instanceRef = useRef<T>()

  if (!instanceRef.current) {
    instanceRef.current = container.createTransient(arg)
  }

  useEffect(
    () => () => {
      if (instanceRef.current) {
        instanceRef.current.destroy()
      }
    },
    []
  )

  return instanceRef.current
}

export function useCreateScoped<T extends IDisposable>(arg: InjectableConstructor<T>) {
  const container = useContext(DIContext)

  const instanceRef = useRef<T>()

  if (!instanceRef.current) {
    instanceRef.current = container.createScoped(arg)
  }

  useEffect(() => () => container.removeScoped(arg), [arg, container])

  return instanceRef.current
}

export function useScoped<T extends IDisposable>(arg: InjectableConstructor<T>) {
  const container = useContext(DIContext)

  return container.getScoped(arg)
}

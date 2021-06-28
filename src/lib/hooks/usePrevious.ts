import { useRef } from 'react'

export function usePrevious<T>(value: T) {
  const valueRef = useRef<T>()
  const prevValue = valueRef.current

  valueRef.current = value

  return prevValue
}

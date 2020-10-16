import { createContext } from 'react'

export function createControllerContext<TController>() {
  return createContext<TController>(undefined)
}

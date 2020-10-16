import { Context, useContext } from 'react'

export function createUseController<TController>(
  context: Context<TController>
) {
  return function useController() {
    return useContext<TController>(context)
  }
}

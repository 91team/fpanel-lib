import React, { FC, createContext, useEffect, useRef } from 'react'

import { DIContainer, IDIContainer } from './container'

export const DIContext = createContext<IDIContainer>(new DIContainer())

export const DIScope: FC<{}> = ({ children }) => {
  const ref = useRef<DIContainer | undefined>()

  if (!ref.current) {
    ref.current = new DIContainer()
  }

  useEffect(
    () =>
      // Перед зачисткой даем React-у прогнать все другие эффекты
      () => {
        if (ref.current) {
          setTimeout(ref.current.destroy, 0)
          ref.current = undefined
        }
      },
    []
  )

  return <DIContext.Provider value={ref.current}>{children}</DIContext.Provider>
}

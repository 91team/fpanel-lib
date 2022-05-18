import React, { FC, useEffect } from 'react'
import { useRouter } from 'react-router5'
import { Params } from 'router5/types/types/base'

type TProps = {
  routeName: string
  params?: Params
}

const Redirect: FC<TProps> = ({ routeName, params = {} }) => {
  const router = useRouter()

  useEffect(() => {
    router.navigate(routeName, params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export { Redirect }

import React, { FC, useEffect } from 'react'

import { observer } from 'mobx-react'

import { StoreName } from 'lib/store/constants'

import { getStore } from 'lib/utils/global'

import { Redirect } from 'components/Redirect/Redirect'

const MainPage: FC<{}> = observer(() => {
  const store = getStore(StoreName.USER)

  if (!store.isAuthorized) {
    return <Redirect routeName="login" />
  }

  return <div>Main Page</div>
})

export { MainPage }

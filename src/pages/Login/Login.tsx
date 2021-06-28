import React, { FC } from 'react'

import { observer } from 'mobx-react'

import { StoreName } from 'lib/store/constants'

import { getStore } from 'lib/utils/global'

import { Redirect } from 'components/Redirect/Redirect'

const LoginPage: FC<{}> = observer(() => {
  const userStore = getStore(StoreName.USER)

  if (userStore.isAuthorized) {
    return <Redirect routeName="index" />
  }

  return <div>Login</div>
})

export { LoginPage }

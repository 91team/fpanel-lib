import React from 'react'

import { render } from 'react-dom'

import { ServiceName } from 'lib/services/types/constants'

import { getService, initGlobals } from 'lib/utils/global'

import { App } from '../containers/App/App'

initGlobals()

const routerService = getService(ServiceName.ROUTER)
const router = routerService.getInstance()
const initialPathname = window.location.pathname

router.start(initialPathname, (err, state) => {
  console.log('Router5 is started')

  render(<App />, document.getElementById('root'))
})

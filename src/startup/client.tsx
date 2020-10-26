import React from 'react'

import { render } from 'react-dom'

import { ServicesManager } from 'lib/services'

import AppContainer from '../containers/App'

export class ClientEntryFactory {
  private servicesManager: ServicesManager

  constructor() {
    this.servicesManager = ServicesManager.build()

    this.render()
  }

  render() {
    const { servicesManager } = this
    const { router: routerService } = servicesManager.getServices()
    const router = routerService.getInstance()
    const initialPathname = window.location.pathname

    router.start(initialPathname, (err, state) => {
      console.log('Router5 is started')

      render(<AppContainer servicesManager={servicesManager} />, document.getElementById('root'))
    })
  }
}

new ClientEntryFactory()

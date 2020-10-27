import { action, flow, observable, reaction } from 'mobx'

import { BaseController } from 'lib/controller/base'

import { FirstSubController } from './subControllers'

import { NAME } from './constants'

export class ExamplePageController extends BaseController<ExamplePageController> {
  static NAME = NAME

  private services: App.TServices

  public initialize = (services: App.TServices) => {
    console.log('ExamplePageController initialized')
    this.services = services

    this.addSubController(FirstSubController)
  }

  public destroy = () => {
    console.log('ExamplePageController destoyed')
    this.removeAllSubControllers()
  }
}

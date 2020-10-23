import { action } from 'mobx'

import { BaseController } from 'lib/controller/base'

import { FirstSubSubController } from './subControllers/firstSubSubController'

import { NAME } from './constants'

import { ExamplePageController } from '../..'

export class FirstSubController extends BaseController<ExamplePageController> {
  static NAME = NAME

  public onCreate = () => {
    console.log('FirstSubController created')
  }

  public onDestroy = () => {
    console.log('FirstSubController destroyed')
  }

  @action.bound public onButtonClick = () => {
    const subController = this.getSubControllerInstance(FirstSubSubController)

    if (subController) {
      this.removeSubControllerInstance(FirstSubSubController)
    } else {
      this.addSubController(FirstSubSubController)
    }
  }
}

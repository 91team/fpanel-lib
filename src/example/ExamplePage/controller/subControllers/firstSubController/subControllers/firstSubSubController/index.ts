import { BaseController } from 'lib/controller/base'

import { NAME } from './constants'

import { ExamplePageController } from '../../../..'
import { FirstSubController } from '../../../firstSubController'

export class FirstSubSubController extends BaseController<
  ExamplePageController,
  FirstSubController
> {
  static NAME = NAME

  public onCreate = () => {
    console.log('FirstSubSubController created')
  }

  public onDestroy = () => {
    console.log('FirstSubSubController destroyed')
  }
}

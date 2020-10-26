import { Context, useContext } from 'react'

import { BaseController, TBaseSubControllers } from 'lib/controller/base'

export function createUseSubControllers<TController extends BaseController>(
  context: Context<TController>
) {
  return function useSubControllers<
    TSubSontrollers extends TBaseSubControllers<TController, BaseController<any>>
  >(
    subControllers: Array<new (parent?: any) => TSubSontrollers[keyof TSubSontrollers]>
  ): TSubSontrollers {
    const controller = useContext<TController>(context)

    return controller.getDeepSubControllersInstancesFromRoot(subControllers) as TSubSontrollers
  }
}

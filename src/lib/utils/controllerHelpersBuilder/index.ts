import { BaseController } from 'lib/controller/base'

import { createApplyController, createWithController, createWithSubControllers } from './HOCs'

import { createUseController, createUseSubControllers } from './hooks'

import { createControllerContext } from './createContext'

export function builder<TController extends BaseController>({
  withControllerPropName,
}: { withControllerPropName?: string } = {}) {
  const context = createControllerContext<TController>()

  const useController = createUseController<TController>(context)
  const baseWithController = createWithController<TController>(useController)
  const withController = baseWithController(withControllerPropName)

  const useSubControllers = createUseSubControllers<TController>(context)
  const withSubControllers = createWithSubControllers(useSubControllers)

  const applyController = createApplyController<TController>(context)

  return {
    context,
    useController,
    baseWithController,
    withController,
    useSubControllers,
    withSubControllers,
    applyController,
  }
}

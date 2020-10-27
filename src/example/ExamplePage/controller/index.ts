import { builder } from 'lib/utils/controllerHelpersBuilder'

import { ExamplePageController } from './implementation'

export const CONTROLLER_PROP_NAME = 'controller' as const

const {
  context,
  useController,
  withController,
  useSubControllers,
  withSubControllers,
  applyController,
} = builder<ExamplePageController>({
  withControllerPropName: CONTROLLER_PROP_NAME,
})

export type TBaseControllerProps = {
  [ExamplePageController.NAME]: ExamplePageController
}
export type TControllerProps = {
  [CONTROLLER_PROP_NAME]: ExamplePageController
}

export {
  ExamplePageController,
  context,
  useController,
  withController,
  useSubControllers,
  withSubControllers,
  applyController,
}

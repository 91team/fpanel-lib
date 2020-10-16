import React, { ComponentType, forwardRef, useMemo } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'

import { BaseController } from 'lib/controller/base'

import { getDisplayName } from 'lib/utils/getDisplayName'

export type TCreateWithControllerHOC = <TController extends BaseController>(
  useController: () => TController
) => (
  propName?: string
) => <TOuterProps extends {}, TProps extends {}>(
  WrappedComponent: ComponentType<TProps>
) => (props: TOuterProps) => JSX.Element

export const createWithController: TCreateWithControllerHOC = useController => propName => WrappedComponent => {
  const displayName = getDisplayName(WrappedComponent)

  const WithController = forwardRef<any, {}>((props, ref) => {
    const controller = useController()
    const controllerProps = useMemo(
      () => ({
        // @ts-expect-error
        [propName || controller.constructor.NAME]: controller,
      }),
      [controller]
    )

    // @ts-expect-error
    return <WrappedComponent ref={ref} {...props} {...controllerProps} />
  })

  WithController.defaultProps = { ...WrappedComponent.defaultProps }
  WithController.displayName = `WithController(${displayName})`

  return hoistNonReactStatics(WithController, WrappedComponent)
}

import React, { ComponentType, Context, forwardRef, useState } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'

import { getDisplayName } from 'lib/utils/getDisplayName'

export function createApplyController<TController>(
  controllerContext: Context<TController>
) {
  return function<TOuterProps extends {}, TProps extends TOuterProps>(
    Controller: new () => TController
  ) {
    return function(WrappedComponent: ComponentType<TProps>) {
      const { Provider } = controllerContext
      const displayName = getDisplayName(WrappedComponent)

      const ApplyControllerHOC = forwardRef<any, TProps>((props, ref) => {
        const [controller] = useState(() => new Controller())

        return (
          <Provider value={controller}>
            <WrappedComponent ref={ref} {...props} />
          </Provider>
        )
      })

      // @ts-expect-error
      ApplyControllerHOC.defaultProps = { ...WrappedComponent.defaultProps }
      ApplyControllerHOC.displayName = `ApplyControllerHOC(${displayName})`

      return hoistNonReactStatics(ApplyControllerHOC, WrappedComponent)
    }
  }
}

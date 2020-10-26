import React, { ComponentType } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'
import { observer } from 'mobx-react'

import { BaseController, TBaseSubControllers } from 'lib/controller/base'

import { getDisplayName } from 'lib/utils/getDisplayName'

export type TBaseSubControllersProps<
  TSubControllers extends TBaseSubControllers = TBaseSubControllers
> = {
  subControllers: TSubControllers
}

export type TCreateWithSubControllers = (
  useSubControllers: (subControllers: typeof BaseController[]) => TBaseSubControllers
) => <TSubControllersProps extends TBaseSubControllersProps>(
  subControllersFactories: Array<
    new (parent?: BaseController) => TSubControllersProps['subControllers'][string]
  >
) => <TOuterProps extends {}, TProps extends {}>(
  WrappedComponent: ComponentType<TProps & TSubControllersProps>
) => (props: TOuterProps) => JSX.Element

export const createWithSubControllers: TCreateWithSubControllers = useSubControllers => subControllersFactories => WrappedComponent => {
  const displayName = getDisplayName(WrappedComponent)

  const WithSubControllers = props => {
    // @ts-expect-error
    const subControllersClasses = subControllersFactories as typeof BaseController[]

    const subControllers = useSubControllers(subControllersClasses)

    return <WrappedComponent {...props} subControllers={subControllers} />
  }

  WithSubControllers.defaultProps = { ...WrappedComponent.defaultProps }
  WithSubControllers.displayName = `withSubControllers(${displayName})`

  return observer(hoistNonReactStatics(WithSubControllers, WrappedComponent))
}

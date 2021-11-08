import React, { ComponentType } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { IDIContainer } from '../di'
import { DIScope } from '../di/context'
import { getDisplayName } from '../utils/getDisplayName'

export type TWithDIContainer = {
  container: IDIContainer
}

export const withIsolatedScope = (WrappedComponent: ComponentType) => {
  const displayName = getDisplayName(WrappedComponent)

  const WithIsolatedScope = (props: any) => (
    <DIScope>
      <WrappedComponent {...props} />
    </DIScope>
  )

  WithIsolatedScope.defaultProps = { ...WrappedComponent.defaultProps }
  WithIsolatedScope.displayName = `Isolated(${displayName})`

  return hoistNonReactStatics(WithIsolatedScope, WrappedComponent)
}

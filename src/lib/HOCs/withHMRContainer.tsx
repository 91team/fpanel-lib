import React, { ComponentType, FC } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'
import { AppContainer as HMRContainer } from 'react-hot-loader'

export type TWithHMRContainerProps = {}
type TWithHMRContainerHOC = <IProps extends TWithHMRContainerProps>(
  WrappedComponent: ComponentType<IProps>
) => (props: IProps) => JSX.Element

export const withHMRContainer: TWithHMRContainerHOC = WrappedComponent => {
  const WithHMRContainer = props => (
    <HMRContainer>
      <WrappedComponent {...props} />
    </HMRContainer>
  )

  WithHMRContainer.defaultProps = { ...WrappedComponent.defaultProps }

  return hoistNonReactStatics(WithHMRContainer, WrappedComponent)
}

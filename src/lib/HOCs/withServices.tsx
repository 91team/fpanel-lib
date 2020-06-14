import React, { ComponentType } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'

import useServices from 'lib/hooks/useServices'

export type TWithServicesProps = { services: App.TServices }
type TWithServicesHOC = <IProps extends TWithServicesProps>(
  WrappedComponent: ComponentType<IProps>
) => (props: IProps) => JSX.Element

const withServices: TWithServicesHOC = WrappedComponent => {
  const WithServices = props => {
    const services = useServices()

    return <WrappedComponent {...props} services={services} />
  }

  WithServices.defaultProps = { ...WrappedComponent.defaultProps }

  return hoistNonReactStatics(WithServices, WrappedComponent)
}

export default withServices

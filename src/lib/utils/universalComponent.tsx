// import React from 'react'

import universal from 'react-universal-component'

export function universalComponent(loadSpec, options = {}) {
  return universal<App.TRouteProps>(loadSpec, {
    // loading: () => <Loading />,
    loadingTransition: false,
    ignoreBabelRename: true,
    onError: error => console.error(error),
    ...options,
  })
}

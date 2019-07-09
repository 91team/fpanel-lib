import React, { FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { Container, globalStyles } from './components'

interface OuterProps {}

const Layout: FunctionComponent<OuterProps> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>{children}</Container>
    </>
  )
}

export default Layout

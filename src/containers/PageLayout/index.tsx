import React, { FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'lib/theme'

import { Container, globalStyles } from './components'

interface OuterProps {}

const Layout: FunctionComponent<OuterProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global styles={globalStyles} />
        <Container>{children}</Container>
      </>
    </ThemeProvider>
  )
}

export default Layout

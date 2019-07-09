import { css } from '@emotion/core'
import styled from 'lib/emotion'

export const globalStyles = css`
  html {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow: auto;
    text-rendering: optimizeLegibility;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.section`
  height: 100%;
  width: 100%;
`

import CirceWOFF from 'static/fonts/Circe.woff'

const styles = ({
  common,
  colors: {
    common: commonColors,
    components: { page }
  }
}: App.TTheme) => ({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'CR',
        fontStyle: 'normal',
        src: `url("${CirceWOFF}") format('woff')`,
        fontDisplay: 'swap'
      }
    ],
    html: {
      width: '100%',
      height: '100%',
      fontFamily: common.fontFamily,
      fontSize: 16
    },
    'body, #__next': {
      display: 'flex',
      flexGrow: 1,
      width: '100%'
    },
    body: {
      flexDirection: 'column',
      height: '100%',
      margin: 0,
      fontFamily: 'inherit',
      backgroundColor: page.background
    },
    ':focus': {
      outline: 'none',
      boxShadow: `inset 0 0 3px 2px ${commonColors.PRIMARY}`
    }
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    overflow: 'auto'
  }
})

export default styles

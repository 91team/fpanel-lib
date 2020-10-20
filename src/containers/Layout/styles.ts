const styles = ({ common }: App.TTheme) => ({
  '@global': {
    html: {
      width: '100%',
      height: '100%',
      fontFamily: common.fontFamily,
      fontSize: 16,
      fontStyle: 'normal',
      boxSizing: 'border-box',
    },
    'body, #root': {
      display: 'flex',
      flexGrow: 1,
      width: '100%',
      overflow: 'auto',
    },
    body: {
      flexDirection: 'column',
      height: '100%',
      margin: 0,
    },
    '*, *:before, *:after': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },
    ':focus': {
      outline: 'none',
    },
    // hide mapbox attribution
    '.mapboxgl-control-container': {
      display: 'none',
    },
  },
})

export { styles as default }

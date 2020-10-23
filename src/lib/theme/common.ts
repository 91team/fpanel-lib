const transitionEasing = 'ease'
const transitionTime = `300ms`

export const common = {
  fontFamily: 'CR, -apple-system, BlinkMacSystemFont, sans-serif',
  transition: {
    config: `${transitionTime} ${transitionEasing}`,
    easing: transitionEasing,
    time: transitionTime,
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: 0,
    whiteSpace: 'nowrap',
    border: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
  },
} as const

export default common

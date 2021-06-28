import React, { FC } from 'react'

const IconSwitchLeft: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66665 5.74676V10.2534L3.41332 8.00009L5.66665 5.74676ZM2.47332 7.52676C2.21332 7.78676 2.21332 8.20676 2.47332 8.46676L5.53332 11.5268C5.94665 11.9468 6.66665 11.6534 6.66665 11.0601V4.94009C6.66665 4.34676 5.94665 4.04676 5.52665 4.46676L2.47332 7.52676ZM9.33332 4.94009V11.0534C9.33332 11.6468 10.0533 11.9468 10.4733 11.5268L13.5333 8.46676C13.7933 8.20676 13.7933 7.78676 13.5333 7.52676L10.4733 4.46676C10.0533 4.05343 9.33332 4.34676 9.33332 4.94009Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSwitchLeft }

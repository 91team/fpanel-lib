import React, { FC } from 'react'

const IconSignalWifi4Bar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.76 4.66667C15.46 4.44 12.4733 2 7.99999 2C3.51999 2 0.53999 4.44 0.23999 4.66667L6.95999 13.04C7.49332 13.7067 8.50666 13.7067 9.03999 13.04L15.76 4.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalWifi4Bar }

import React, { FC } from 'react'

const IconArrowLeft: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.19333 5.80666L6.46667 7.53333C6.20667 7.79333 6.20667 8.21333 6.46667 8.47333L8.19333 10.2C8.61333 10.62 9.33333 10.32 9.33333 9.72666V6.27333C9.33333 5.67999 8.61333 5.38666 8.19333 5.80666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowLeft }

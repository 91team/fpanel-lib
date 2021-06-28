import React, { FC } from 'react'

const IconArrowDropUp: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.80666 8.1934L7.53333 6.46673C7.79333 6.20673 8.21333 6.20673 8.47333 6.46673L10.2 8.1934C10.62 8.6134 10.32 9.3334 9.72666 9.3334H6.27333C5.67999 9.3334 5.38666 8.6134 5.80666 8.1934Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowDropUp }

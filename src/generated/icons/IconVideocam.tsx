import React, { FC } from 'react'

const IconVideocam: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 7V4.66667C11.3333 4.3 11.0333 4 10.6667 4H2.66667C2.3 4 2 4.3 2 4.66667V11.3333C2 11.7 2.3 12 2.66667 12H10.6667C11.0333 12 11.3333 11.7 11.3333 11.3333V9L12.86 10.5267C13.28 10.9467 14 10.6467 14 10.0533V5.94C14 5.34667 13.28 5.04667 12.86 5.46667L11.3333 7Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVideocam }

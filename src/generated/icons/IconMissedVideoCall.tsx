import React, { FC } from 'react'

const IconMissedVideoCall: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 7V4.66667C11.3333 4.3 11.0333 4 10.6667 4H2.66667C2.3 4 2 4.3 2 4.66667V11.3333C2 11.7 2.3 12 2.66667 12H10.6667C11.0333 12 11.3333 11.7 11.3333 11.3333V9L12.86 10.5267C13.28 10.9467 14 10.6467 14 10.0533V5.94C14 5.34667 13.28 5.04667 12.86 5.46667L11.3333 7ZM7.14 9.52667C6.88 9.78667 6.46 9.78667 6.2 9.52667L4.08 7.40667V9.10667H3.33333V6.48C3.33333 6.29333 3.48 6.14667 3.66667 6.14667H6.29333V6.88667H4.59333L6.66667 8.95333L9.48 6.14L10 6.66667L7.14 9.52667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMissedVideoCall }

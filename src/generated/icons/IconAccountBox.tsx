import React, { FC } from 'react'

const IconAccountBox: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333ZM10 6C10 7.10667 9.10667 8 8 8C6.89333 8 6 7.10667 6 6C6 4.89333 6.89333 4 8 4C9.10667 4 10 4.89333 10 6ZM4 11.3333C4 10 6.66667 9.26667 8 9.26667C9.33333 9.26667 12 10 12 11.3333V12H4V11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAccountBox }

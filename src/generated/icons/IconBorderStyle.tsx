import React, { FC } from 'react'

const IconBorderStyle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14H11.3333V12.6667H10V14ZM12.6667 14H14V12.6667H12.6667V14ZM4.66667 14H6V12.6667H4.66667V14ZM7.33333 14H8.66667V12.6667H7.33333V14ZM12.6667 11.3333H14V10H12.6667V11.3333ZM12.6667 8.66667H14V7.33333H12.6667V8.66667ZM2 3.33333V13.3333C2 13.7 2.3 14 2.66667 14C3.03333 14 3.33333 13.7 3.33333 13.3333V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H13.3333C13.7 3.33333 14 3.03333 14 2.66667C14 2.3 13.7 2 13.3333 2H3.33333C2.6 2 2 2.6 2 3.33333ZM12.6667 6H14V4.66667H12.6667V6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBorderStyle }

import React, { FC } from 'react'

const IconGradient: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 6H8.66667V7.33333H7.33333V6ZM6 7.33333H7.33333V8.66667H6V7.33333ZM8.66667 7.33333H10V8.66667H8.66667V7.33333ZM10 6H11.3333V7.33333H10V6ZM4.66667 6H6V7.33333H4.66667V6ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM6 12H4.66667V10.6667H6V12ZM8.66667 12H7.33333V10.6667H8.66667V12ZM11.3333 12H10V10.6667H11.3333V12ZM12.6667 7.33333H11.3333V8.66667H12.6667V10H11.3333V8.66667H10V10H8.66667V8.66667H7.33333V10H6V8.66667H4.66667V10H3.33333V8.66667H4.66667V7.33333H3.33333V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V7.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGradient }

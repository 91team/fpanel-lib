import React, { FC } from 'react'

const IconLooks6: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 10H8.66667V8.66667H7.33333V10ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM9.33333 6H7.33333V7.33333H8.66667C9.4 7.33333 10 7.93333 10 8.66667V10C10 10.74 9.4 11.3333 8.66667 11.3333H7.33333C6.6 11.3333 6 10.74 6 10V6C6 5.26667 6.6 4.66667 7.33333 4.66667H9.33333C9.7 4.66667 10 4.96667 10 5.33333C10 5.7 9.7 6 9.33333 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooks6 }

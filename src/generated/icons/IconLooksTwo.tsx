import React, { FC } from 'react'

const IconLooksTwo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM10 7.33333C10 8.06667 9.4 8.66667 8.66667 8.66667H7.33333V10H9.33333C9.7 10 10 10.3 10 10.6667C10 11.0333 9.7 11.3333 9.33333 11.3333H6.66667C6.3 11.3333 6 11.0333 6 10.6667V8.66667C6 7.93333 6.6 7.33333 7.33333 7.33333H8.66667V6H6.66667C6.3 6 6 5.7 6 5.33333C6 4.96667 6.3 4.66667 6.66667 4.66667H8.66667C9.4 4.66667 10 5.26667 10 6V7.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooksTwo }

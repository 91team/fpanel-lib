import React, { FC } from 'react'

const IconLooks5: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM9.33333 6H7.33333V7.33333H8.66667C9.4 7.33333 10 7.93333 10 8.66667V10C10 10.74 9.4 11.3333 8.66667 11.3333H6.66667C6.3 11.3333 6 11.0333 6 10.6667C6 10.3 6.3 10 6.66667 10H8.66667V8.66667H6.66667C6.3 8.66667 6 8.36667 6 8V5.33333C6 4.96667 6.3 4.66667 6.66667 4.66667H9.33333C9.7 4.66667 10 4.96667 10 5.33333C10 5.7 9.7 6 9.33333 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooks5 }

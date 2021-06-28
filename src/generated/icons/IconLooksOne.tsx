import React, { FC } from 'react'

const IconLooksOne: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM8.66667 11.3333C8.3 11.3333 8 11.0333 8 10.6667V6H7.33333C6.96667 6 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.96667 4.66667 7.33333 4.66667H8.66667C9.03333 4.66667 9.33333 4.96667 9.33333 5.33333V10.6667C9.33333 11.0333 9.03333 11.3333 8.66667 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooksOne }

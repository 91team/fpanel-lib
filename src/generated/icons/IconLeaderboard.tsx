import React, { FC } from 'react'

const IconLeaderboard: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33334 14H2.00001C1.63334 14 1.33334 13.7 1.33334 13.3333V6.66667C1.33334 6.3 1.63334 6 2.00001 6H4.33334C4.70001 6 5.00001 6.3 5.00001 6.66667V13.3333C5.00001 13.7 4.70001 14 4.33334 14ZM9.16668 2H6.83334C6.46668 2 6.16668 2.3 6.16668 2.66667V13.3333C6.16668 13.7 6.46668 14 6.83334 14H9.16668C9.53334 14 9.83334 13.7 9.83334 13.3333V2.66667C9.83334 2.3 9.53334 2 9.16668 2ZM14 7.33333H11.6667C11.3 7.33333 11 7.63333 11 8V13.3333C11 13.7 11.3 14 11.6667 14H14C14.3667 14 14.6667 13.7 14.6667 13.3333V8C14.6667 7.63333 14.3667 7.33333 14 7.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLeaderboard }

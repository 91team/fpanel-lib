import React, { FC } from 'react'

const IconStickyNote2: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.32667C2.59333 2 2 2.6 2 3.33333L2.00667 12.6667C2.00667 13.4 2.6 14 3.33333 14H10L14 10V3.33333C14 2.6 13.4 2 12.6667 2ZM5.33333 5.33333H10.6667C11.0333 5.33333 11.3333 5.63333 11.3333 6C11.3333 6.36667 11.0333 6.66667 10.6667 6.66667H5.33333C4.96667 6.66667 4.66667 6.36667 4.66667 6C4.66667 5.63333 4.96667 5.33333 5.33333 5.33333ZM7.33333 9.33333H5.33333C4.96667 9.33333 4.66667 9.03333 4.66667 8.66667C4.66667 8.3 4.96667 8 5.33333 8H7.33333C7.7 8 8 8.3 8 8.66667C8 9.03333 7.7 9.33333 7.33333 9.33333ZM9.33333 13V10C9.33333 9.63333 9.63333 9.33333 10 9.33333H13L9.33333 13Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStickyNote2 }

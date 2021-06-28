import React, { FC } from 'react'

const IconStairs: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM11.3333 5.33333H10.3867V7.55333H8.66667V9.77333H6.94667L6.96667 12H4.66667C4.3 12 4 11.7 4 11.3333C4 10.9667 4.3 10.6667 4.66667 10.6667H5.61333V8.44667H7.33333V6.22H9.05333V4H11.3333C11.7 4 12 4.3 12 4.66667C12 5.03333 11.7 5.33333 11.3333 5.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStairs }

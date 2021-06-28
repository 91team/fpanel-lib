import React, { FC } from 'react'

const IconPausePresentation: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00001C1.26667 2 0.666672 2.6 0.666672 3.33333V12.6667C0.666672 13.4 1.26667 14 2.00001 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM14 12C14 12.3667 13.7 12.6667 13.3333 12.6667H2.66667C2.3 12.6667 2.00001 12.3667 2.00001 12V4C2.00001 3.63333 2.3 3.33333 2.66667 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V12ZM6.66667 5.33333C6.3 5.33333 6 5.63333 6 6V10C6 10.3667 6.3 10.6667 6.66667 10.6667C7.03334 10.6667 7.33334 10.3667 7.33334 10V6C7.33334 5.63333 7.03334 5.33333 6.66667 5.33333ZM9.33334 5.33333C8.96667 5.33333 8.66667 5.63333 8.66667 6V10C8.66667 10.3667 8.96667 10.6667 9.33334 10.6667C9.7 10.6667 10 10.3667 10 10V6C10 5.63333 9.7 5.33333 9.33334 5.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPausePresentation }

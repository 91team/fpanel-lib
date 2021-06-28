import React, { FC } from 'react'

const IconViewDay: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99999 14H13.3333C13.7 14 14 13.7 14 13.3333V12.6667C14 12.3 13.7 12 13.3333 12H1.99999C1.63333 12 1.33333 12.3 1.33333 12.6667V13.3333C1.33333 13.7 1.63333 14 1.99999 14ZM13.3333 5.33333H1.99999C1.63333 5.33333 1.33333 5.63333 1.33333 6V10C1.33333 10.3667 1.63333 10.6667 1.99999 10.6667H13.3333C13.7 10.6667 14 10.3667 14 10V6C14 5.63333 13.7 5.33333 13.3333 5.33333ZM1.33333 2.66667V3.33333C1.33333 3.7 1.63333 4 1.99999 4H13.3333C13.7 4 14 3.7 14 3.33333V2.66667C14 2.3 13.7 2 13.3333 2H1.99999C1.63333 2 1.33333 2.3 1.33333 2.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconViewDay }

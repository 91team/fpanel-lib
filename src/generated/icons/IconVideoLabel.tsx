import React, { FC } from 'react'

const IconVideoLabel: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00001C1.26667 2 0.666672 2.6 0.666672 3.33333V12.6667C0.666672 13.4 1.26667 14 2.00001 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM14 10.6667H2.00001V4C2.00001 3.63333 2.3 3.33333 2.66667 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVideoLabel }

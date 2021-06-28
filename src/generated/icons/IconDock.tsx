import React, { FC } from 'react'

const IconDock: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15.3333H10C10.3667 15.3333 10.6667 15.0333 10.6667 14.6667C10.6667 14.3 10.3667 14 10 14H6C5.63333 14 5.33333 14.3 5.33333 14.6667C5.33333 15.0333 5.63333 15.3333 6 15.3333ZM10.6667 0.673338L5.33333 0.666672C4.6 0.666672 4 1.26667 4 2.00001V11.3333C4 12.0667 4.6 12.6667 5.33333 12.6667H10.6667C11.4 12.6667 12 12.0667 12 11.3333V2.00001C12 1.26667 11.4 0.673338 10.6667 0.673338ZM10.6667 10H5.33333V3.33334H10.6667V10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDock }

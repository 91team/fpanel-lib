import React, { FC } from 'react'

const IconPersonalVideo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00001C1.26667 2 0.666672 2.6 0.666672 3.33333V11.3333C0.666672 12.0667 1.26667 12.6667 2.00001 12.6667H5.33334V13.3333C5.33334 13.7 5.63334 14 6 14H10C10.3667 14 10.6667 13.7 10.6667 13.3333V12.6667H14C14.7333 12.6667 15.3267 12.0667 15.3267 11.3333L15.3333 3.33333C15.3333 2.59333 14.7333 2 14 2ZM13.3333 11.3333H2.66667C2.3 11.3333 2.00001 11.0333 2.00001 10.6667V4C2.00001 3.63333 2.3 3.33333 2.66667 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V10.6667C14 11.0333 13.7 11.3333 13.3333 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPersonalVideo }

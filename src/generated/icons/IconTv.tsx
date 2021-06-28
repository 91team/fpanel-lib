import React, { FC } from 'react'

const IconTv: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00002C1.26669 2 0.666687 2.6 0.666687 3.33333V11.3333C0.666687 12.0667 1.26669 12.6667 2.00002 12.6667H5.33335V13.3333C5.33335 13.7 5.63335 14 6.00002 14H10C10.3667 14 10.6667 13.7 10.6667 13.3333V12.6667H14C14.7334 12.6667 15.3267 12.0667 15.3267 11.3333L15.3334 3.33333C15.3334 2.6 14.7334 2 14 2ZM13.3334 11.3333H2.66669C2.30002 11.3333 2.00002 11.0333 2.00002 10.6667V4C2.00002 3.63333 2.30002 3.33333 2.66669 3.33333H13.3334C13.7 3.33333 14 3.63333 14 4V10.6667C14 11.0333 13.7 11.3333 13.3334 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTv }

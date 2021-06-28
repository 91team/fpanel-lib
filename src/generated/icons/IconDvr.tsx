import React, { FC } from 'react'

const IconDvr: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H1.99999C1.26666 2 0.666656 2.6 0.666656 3.33333V11.3333C0.666656 12.0667 1.26666 12.6667 1.99999 12.6667H5.33332V13.3333C5.33332 13.7 5.63332 14 5.99999 14H9.99999C10.3667 14 10.6667 13.7 10.6667 13.3333V12.6667H14C14.7333 12.6667 15.3333 12.0667 15.3333 11.3333V3.33333C15.3333 2.6 14.7333 2 14 2ZM13.3333 11.3333H2.66666C2.29999 11.3333 1.99999 11.0333 1.99999 10.6667V4C1.99999 3.63333 2.29999 3.33333 2.66666 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V10.6667C14 11.0333 13.7 11.3333 13.3333 11.3333ZM12 5.33333H5.99999C5.63332 5.33333 5.33332 5.63333 5.33332 6C5.33332 6.36667 5.63332 6.66667 5.99999 6.66667H12C12.3667 6.66667 12.6667 6.36667 12.6667 6C12.6667 5.63333 12.3667 5.33333 12 5.33333ZM12 8H5.99999C5.63332 8 5.33332 8.3 5.33332 8.66667C5.33332 9.03333 5.63332 9.33333 5.99999 9.33333H12C12.3667 9.33333 12.6667 9.03333 12.6667 8.66667C12.6667 8.3 12.3667 8 12 8ZM4.66666 5.33333H3.33332V6.66667H4.66666V5.33333ZM4.66666 8H3.33332V9.33333H4.66666V8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDvr }

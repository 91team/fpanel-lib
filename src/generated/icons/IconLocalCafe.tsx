import React, { FC } from 'react'

const IconLocalCafe: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2H4.00001C3.26668 2 2.66668 2.6 2.66668 3.33333V8.66667C2.66668 10.14 3.86001 11.3333 5.33334 11.3333H9.33334C10.8067 11.3333 12 10.14 12 8.66667V6.66667H13.3333C14.0667 6.66667 14.6667 6.06667 14.6667 5.33333V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM13.3333 5.33333H12V3.33333H13.3333V5.33333ZM2.00001 14H12.6667C13.0333 14 13.3333 13.7 13.3333 13.3333C13.3333 12.9667 13.0333 12.6667 12.6667 12.6667H2.00001C1.63334 12.6667 1.33334 12.9667 1.33334 13.3333C1.33334 13.7 1.63334 14 2.00001 14Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalCafe }

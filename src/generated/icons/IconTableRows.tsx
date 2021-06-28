import React, { FC } from 'react'

const IconTableRows: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4.66666H2.66668C1.93334 4.66666 1.33334 4.06666 1.33334 3.33333V2.66666C1.33334 1.93333 1.93334 1.33333 2.66668 1.33333H13.3333C14.0667 1.33333 14.6667 1.93333 14.6667 2.66666V3.33333C14.6667 4.06666 14.0667 4.66666 13.3333 4.66666ZM13.3333 6.33333H2.66668C1.93334 6.33333 1.33334 6.93333 1.33334 7.66666V8.33333C1.33334 9.06666 1.93334 9.66666 2.66668 9.66666H13.3333C14.0667 9.66666 14.6667 9.06666 14.6667 8.33333V7.66666C14.6667 6.93333 14.0667 6.33333 13.3333 6.33333ZM13.3333 11.3333H2.66668C1.93334 11.3333 1.33334 11.9333 1.33334 12.6667V13.3333C1.33334 14.0667 1.93334 14.6667 2.66668 14.6667H13.3333C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V12.6667C14.6667 11.9333 14.0667 11.3333 13.3333 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTableRows }

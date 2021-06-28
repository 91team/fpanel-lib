import React, { FC } from 'react'

const IconMarkunreadMailbox: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4H6.66668V7.33333C6.66668 7.7 6.36668 8 6.00001 8C5.63334 8 5.33334 7.7 5.33334 7.33333V2.66667H8.66668C9.03334 2.66667 9.33334 2.36667 9.33334 2V0.666667C9.33334 0.3 9.03334 0 8.66668 0H4.66668C4.30001 0 4.00001 0.3 4.00001 0.666667V4H2.66668C1.93334 4 1.33334 4.6 1.33334 5.33333V13.3333C1.33334 14.0667 1.93334 14.6667 2.66668 14.6667H13.3333C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V5.33333C14.6667 4.6 14.0667 4 13.3333 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMarkunreadMailbox }

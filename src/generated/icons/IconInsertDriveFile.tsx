import React, { FC } from 'react'

const IconInsertDriveFile: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99999 1.33334C3.26666 1.33334 2.67332 1.93334 2.67332 2.66668L2.66666 13.3333C2.66666 14.0667 3.25999 14.6667 3.99332 14.6667H12C12.7333 14.6667 13.3333 14.0667 13.3333 13.3333V5.88668C13.3333 5.53334 13.1933 5.19334 12.94 4.94668L9.71999 1.72668C9.47332 1.47334 9.13332 1.33334 8.77999 1.33334H3.99999ZM8.66666 5.33334V2.33334L12.3333 6.00001H9.33332C8.96666 6.00001 8.66666 5.70001 8.66666 5.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInsertDriveFile }

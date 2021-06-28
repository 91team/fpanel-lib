import React, { FC } from 'react'

const IconFolderOpen: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4H8.00001L7.06001 3.06C6.80668 2.80666 6.46668 2.66666 6.11334 2.66666H2.66668C1.93334 2.66666 1.34001 3.26666 1.34001 4L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66668 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33333C14.6667 4.6 14.0667 4 13.3333 4ZM12.6667 12H3.33334C2.96668 12 2.66668 11.7 2.66668 11.3333V6C2.66668 5.63333 2.96668 5.33333 3.33334 5.33333H12.6667C13.0333 5.33333 13.3333 5.63333 13.3333 6V11.3333C13.3333 11.7 13.0333 12 12.6667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFolderOpen }

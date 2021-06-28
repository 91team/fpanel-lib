import React, { FC } from 'react'

const IconFolderShared: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4H8.00001L7.06001 3.06C6.80668 2.80666 6.46668 2.66666 6.11334 2.66666H2.66668C1.93334 2.66666 1.34001 3.26666 1.34001 4L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66668 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33333C14.6667 4.6 14.0667 4 13.3333 4ZM10 6C10.7333 6 11.3333 6.6 11.3333 7.33333C11.3333 8.06666 10.7333 8.66666 10 8.66666C9.26668 8.66666 8.66668 8.06666 8.66668 7.33333C8.66668 6.6 9.26668 6 10 6ZM12.6667 11.3333H7.33334V10.6667C7.33334 9.78 9.11334 9.33333 10 9.33333C10.8867 9.33333 12.6667 9.78 12.6667 10.6667V11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFolderShared }

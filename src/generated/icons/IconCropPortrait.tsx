import React, { FC } from 'react'

const IconCropPortrait: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 2H4.66668C3.93334 2 3.33334 2.6 3.33334 3.33333V12.6667C3.33334 13.4 3.93334 14 4.66668 14H11.3333C12.0667 14 12.6667 13.4 12.6667 12.6667V3.33333C12.6667 2.6 12.0667 2 11.3333 2ZM10.6667 12.6667H5.33334C4.96668 12.6667 4.66668 12.3667 4.66668 12V4C4.66668 3.63333 4.96668 3.33333 5.33334 3.33333H10.6667C11.0333 3.33333 11.3333 3.63333 11.3333 4V12C11.3333 12.3667 11.0333 12.6667 10.6667 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCropPortrait }

import React, { FC } from 'react'

const IconBookmarkBorder: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 2H4.66668C3.93334 2 3.33334 2.6 3.33334 3.33333V14L8.00001 12L12.6667 14V3.33333C12.6667 2.6 12.0667 2 11.3333 2ZM11.3333 12L8.00001 10.5467L4.66668 12V4C4.66668 3.63333 4.96668 3.33333 5.33334 3.33333H10.6667C11.0333 3.33333 11.3333 3.63333 11.3333 4V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBookmarkBorder }

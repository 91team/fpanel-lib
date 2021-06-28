import React, { FC } from 'react'

const IconSlideshow: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 6.02667V9.97333C6.66667 10.2533 6.98667 10.4067 7.20667 10.2333L9.67333 8.26C9.84 8.12667 9.84 7.87333 9.67333 7.74L7.20667 5.76667C6.98667 5.59333 6.66667 5.74667 6.66667 6.02667ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V12C12.6667 12.3667 12.3667 12.6667 12 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSlideshow }

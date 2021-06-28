import React, { FC } from 'react'

const IconCenterFocusStrong: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.33333C6.52667 5.33333 5.33333 6.52667 5.33333 8C5.33333 9.47333 6.52667 10.6667 8 10.6667C9.47333 10.6667 10.6667 9.47333 10.6667 8C10.6667 6.52667 9.47333 5.33333 8 5.33333ZM2.66667 10C2.3 10 2 10.3 2 10.6667V12.6667C2 13.4 2.6 14 3.33333 14H5.33333C5.7 14 6 13.7 6 13.3333C6 12.9667 5.7 12.6667 5.33333 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V10.6667C3.33333 10.3 3.03333 10 2.66667 10ZM3.33333 4C3.33333 3.63333 3.63333 3.33333 4 3.33333H5.33333C5.7 3.33333 6 3.03333 6 2.66667C6 2.3 5.7 2 5.33333 2H3.33333C2.6 2 2 2.6 2 3.33333V5.33333C2 5.7 2.3 6 2.66667 6C3.03333 6 3.33333 5.7 3.33333 5.33333V4ZM12.6667 2H10.6667C10.3 2 10 2.3 10 2.66667C10 3.03333 10.3 3.33333 10.6667 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V5.33333C12.6667 5.7 12.9667 6 13.3333 6C13.7 6 14 5.7 14 5.33333V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12C12.6667 12.3667 12.3667 12.6667 12 12.6667H10.6667C10.3 12.6667 10 12.9667 10 13.3333C10 13.7 10.3 14 10.6667 14H12.6667C13.4 14 14 13.4 14 12.6667V10.6667C14 10.3 13.7 10 13.3333 10C12.9667 10 12.6667 10.3 12.6667 10.6667V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCenterFocusStrong }

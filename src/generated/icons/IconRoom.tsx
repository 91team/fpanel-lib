import React, { FC } from 'react'

const IconRoom: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99998 1.33337C5.41998 1.33337 3.33331 3.42004 3.33331 6.00004C3.33331 8.78004 6.27998 12.6134 7.49331 14.0734C7.75998 14.3934 8.24665 14.3934 8.51331 14.0734C9.71998 12.6134 12.6666 8.78004 12.6666 6.00004C12.6666 3.42004 10.58 1.33337 7.99998 1.33337ZM7.99998 7.66671C7.07998 7.66671 6.33331 6.92004 6.33331 6.00004C6.33331 5.08004 7.07998 4.33337 7.99998 4.33337C8.91998 4.33337 9.66665 5.08004 9.66665 6.00004C9.66665 6.92004 8.91998 7.66671 7.99998 7.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRoom }

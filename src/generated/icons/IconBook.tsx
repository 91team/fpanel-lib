import React, { FC } from 'react'

const IconBook: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.33325H4.00002C3.26669 1.33325 2.66669 1.93325 2.66669 2.66659V13.3333C2.66669 14.0666 3.26669 14.6666 4.00002 14.6666H12C12.7334 14.6666 13.3334 14.0666 13.3334 13.3333V2.66659C13.3334 1.93325 12.7334 1.33325 12 1.33325ZM4.00002 2.66659H7.33335V7.99992L5.66669 6.99992L4.00002 7.99992V2.66659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBook }

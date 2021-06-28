import React, { FC } from 'react'

const IconCrop75: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 4.66669H3.33333C2.6 4.66669 2 5.26669 2 6.00002V10C2 10.7334 2.6 11.3334 3.33333 11.3334H12.6667C13.4 11.3334 14 10.7334 14 10V6.00002C14 5.26669 13.4 4.66669 12.6667 4.66669ZM12 10H4C3.63333 10 3.33333 9.70002 3.33333 9.33335V6.66669C3.33333 6.30002 3.63333 6.00002 4 6.00002H12C12.3667 6.00002 12.6667 6.30002 12.6667 6.66669V9.33335C12.6667 9.70002 12.3667 10 12 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCrop75 }

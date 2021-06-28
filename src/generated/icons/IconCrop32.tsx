import React, { FC } from 'react'

const IconCrop32: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2.66669H3.33333C2.6 2.66669 2 3.26669 2 4.00002V12C2 12.7334 2.6 13.3334 3.33333 13.3334H12.6667C13.4 13.3334 14 12.7334 14 12V4.00002C14 3.26669 13.4 2.66669 12.6667 2.66669ZM12 12H4C3.63333 12 3.33333 11.7 3.33333 11.3334V4.66669C3.33333 4.30002 3.63333 4.00002 4 4.00002H12C12.3667 4.00002 12.6667 4.30002 12.6667 4.66669V11.3334C12.6667 11.7 12.3667 12 12 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCrop32 }

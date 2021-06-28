import React, { FC } from 'react'

const IconCropSquare: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.66669H4.00001C3.26667 2.66669 2.66667 3.26669 2.66667 4.00002V12C2.66667 12.7334 3.26667 13.3334 4.00001 13.3334H12C12.7333 13.3334 13.3333 12.7334 13.3333 12V4.00002C13.3333 3.26669 12.7333 2.66669 12 2.66669ZM11.3333 12H4.66667C4.3 12 4.00001 11.7 4.00001 11.3334V4.66669C4.00001 4.30002 4.3 4.00002 4.66667 4.00002H11.3333C11.7 4.00002 12 4.30002 12 4.66669V11.3334C12 11.7 11.7 12 11.3333 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCropSquare }

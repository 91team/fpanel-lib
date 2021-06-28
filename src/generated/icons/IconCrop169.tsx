import React, { FC } from 'react'

const IconCrop169: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 4H3.33333C2.6 4 2 4.6 2 5.33333V10.6667C2 11.4 2.6 12 3.33333 12H12.6667C13.4 12 14 11.4 14 10.6667V5.33333C14 4.6 13.4 4 12.6667 4ZM12 10.6667H4C3.63333 10.6667 3.33333 10.3667 3.33333 10V6C3.33333 5.63333 3.63333 5.33333 4 5.33333H12C12.3667 5.33333 12.6667 5.63333 12.6667 6V10C12.6667 10.3667 12.3667 10.6667 12 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCrop169 }

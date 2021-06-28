import React, { FC } from 'react'

const IconPhoneIphone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 0.666656H5.00001C4.08001 0.666656 3.33334 1.41332 3.33334 2.33332V13.6667C3.33334 14.5867 4.08001 15.3333 5.00001 15.3333H10.3333C11.2533 15.3333 12 14.5867 12 13.6667V2.33332C12 1.41332 11.2533 0.666656 10.3333 0.666656ZM7.66668 14.6667C7.11334 14.6667 6.66668 14.22 6.66668 13.6667C6.66668 13.1133 7.11334 12.6667 7.66668 12.6667C8.22001 12.6667 8.66668 13.1133 8.66668 13.6667C8.66668 14.22 8.22001 14.6667 7.66668 14.6667ZM10.6667 12H4.66668V2.66666H10.6667V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhoneIphone }

import React, { FC } from 'react'

const IconFormatItalic: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 3.66666C6.66667 4.21999 7.11333 4.66666 7.66667 4.66666H8.14L5.86 9.99999H5C4.44667 9.99999 4 10.4467 4 11C4 11.5533 4.44667 12 5 12H8.33333C8.88667 12 9.33333 11.5533 9.33333 11C9.33333 10.4467 8.88667 9.99999 8.33333 9.99999H7.86L10.14 4.66666H11C11.5533 4.66666 12 4.21999 12 3.66666C12 3.11332 11.5533 2.66666 11 2.66666H7.66667C7.11333 2.66666 6.66667 3.11332 6.66667 3.66666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatItalic }

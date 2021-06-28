import React, { FC } from 'react'

const IconFunctions: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2.66666H5.04C4.46667 2.66666 4 3.13332 4 3.70666C4 3.89332 4.08 4.07332 4.21333 4.19999L8.33333 7.99999L4.21333 11.8C4.08 11.9267 4 12.1067 4 12.2933C4 12.8667 4.46667 13.3333 5.04 13.3333H11C11.5533 13.3333 12 12.8867 12 12.3333C12 11.78 11.5533 11.3333 11 11.3333H7.33333L9.72667 8.93999C10.2467 8.41999 10.2467 7.57332 9.72667 7.05332L7.33333 4.66666H11C11.5533 4.66666 12 4.21999 12 3.66666C12 3.11332 11.5533 2.66666 11 2.66666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFunctions }

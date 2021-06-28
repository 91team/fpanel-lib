import React, { FC } from 'react'

const IconNorthWest: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00001 10C4.37334 10 4.66668 9.70004 4.66668 9.33337V5.60671L11.9267 12.8667C12.1867 13.1267 12.6067 13.1267 12.8667 12.8667C13.1267 12.6067 13.1267 12.1867 12.8667 11.9267L5.60668 4.66671H9.33334C9.70001 4.66671 10 4.36671 10 4.00004C10 3.63337 9.70001 3.33337 9.33334 3.33337H4.00001C3.63334 3.33337 3.33334 3.63337 3.33334 4.00004V9.33337C3.33334 9.70004 3.63334 10 4.00001 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNorthWest }

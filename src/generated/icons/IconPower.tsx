import React, { FC } from 'react'

const IconPower: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6733 4.66667L10.6667 2.66667C10.6667 2.3 10.3667 2 10 2C9.63333 2 9.33333 2.3 9.33333 2.66667V4.66667H6.66667V2.66667C6.66667 2.3 6.36667 2 6 2C5.63333 2 5.33333 2.3 5.33333 2.66667V4.66667H5.32667C4.6 4.66667 4 5.26667 4 5.99333V9.1C4 9.45333 4.14 9.79333 4.38667 10.04L6.33333 12V13.3333C6.33333 13.7 6.63333 14 7 14H9C9.36667 14 9.66667 13.7 9.66667 13.3333V12L11.6133 10.0533C11.86 9.8 12 9.46 12 9.10667V5.99333C12 5.26 11.4067 4.66667 10.6733 4.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPower }

import React, { FC } from 'react'

const IconWineBar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 2C4.3 2 4 2.3 4 2.66667V6C4 7.98 5.44 9.62 7.33333 9.94V12.6667H6C5.63333 12.6667 5.33333 12.9667 5.33333 13.3333C5.33333 13.7 5.63333 14 6 14H10C10.3667 14 10.6667 13.7 10.6667 13.3333C10.6667 12.9667 10.3667 12.6667 10 12.6667H8.66667V9.94C10.56 9.62 12 7.98 12 6V2.66667C12 2.3 11.7 2 11.3333 2H4.66667ZM10.6667 5.33333H5.33333V3.33333H10.6667V5.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWineBar }

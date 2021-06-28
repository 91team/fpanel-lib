import React, { FC } from 'react'

const IconIndeterminateCheckBox: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM10.6667 8.66667H5.33333C4.96667 8.66667 4.66667 8.36667 4.66667 8C4.66667 7.63333 4.96667 7.33333 5.33333 7.33333H10.6667C11.0333 7.33333 11.3333 7.63333 11.3333 8C11.3333 8.36667 11.0333 8.66667 10.6667 8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconIndeterminateCheckBox }

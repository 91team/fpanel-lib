import React, { FC } from 'react'

const IconSettingsCell: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 16H6V14.6667H4.66667V16ZM7.33333 16H8.66667V14.6667H7.33333V16ZM10 16H11.3333V14.6667H10V16ZM10.6667 0.00666667L5.33333 0C4.6 0 4 0.6 4 1.33333V12C4 12.7333 4.6 13.3333 5.33333 13.3333H10.6667C11.4 13.3333 12 12.7333 12 12V1.33333C12 0.6 11.4 0.00666667 10.6667 0.00666667ZM10.6667 10.6667H5.33333V2.66667H10.6667V10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSettingsCell }

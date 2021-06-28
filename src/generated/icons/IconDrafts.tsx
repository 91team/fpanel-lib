import React, { FC } from 'react'

const IconDrafts: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.66 5.33333C14.66 4.85333 14.4133 4.43333 14.0333 4.2L8.67331 1.06C8.25998 0.813333 7.73998 0.813333 7.32665 1.06L1.96665 4.2C1.58665 4.43333 1.33331 4.85333 1.33331 5.33333V12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12L14.66 5.33333ZM7.29331 8.22667L2.49331 5.22667L7.32665 2.39333C7.73998 2.14667 8.25998 2.14667 8.67331 2.39333L13.5066 5.22667L8.70665 8.22667C8.27331 8.49333 7.72665 8.49333 7.29331 8.22667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDrafts }

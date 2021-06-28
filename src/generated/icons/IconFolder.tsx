import React, { FC } from 'react'

const IconFolder: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.05998 3.06C6.80665 2.80666 6.46665 2.66666 6.11331 2.66666H2.66665C1.93331 2.66666 1.33998 3.26666 1.33998 4L1.33331 12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V5.33333C14.6666 4.6 14.0666 4 13.3333 4H7.99998L7.05998 3.06Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFolder }

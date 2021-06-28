import React, { FC } from 'react'

const IconBookmark: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 2H4.66665C3.93331 2 3.33331 2.6 3.33331 3.33333V14L7.99998 12L12.6666 14V3.33333C12.6666 2.6 12.0666 2 11.3333 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBookmark }

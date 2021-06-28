import React, { FC } from 'react'

const IconForum: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 3.99998H12.6667V9.33331C12.6667 9.69998 12.3667 9.99998 12 9.99998H3.99999V10.6666C3.99999 11.4 4.59999 12 5.33333 12H12L14.6667 14.6666V5.33331C14.6667 4.59998 14.0667 3.99998 13.3333 3.99998ZM11.3333 7.33331V2.66665C11.3333 1.93331 10.7333 1.33331 10 1.33331H2.66666C1.93333 1.33331 1.33333 1.93331 1.33333 2.66665V11.3333L3.99999 8.66665H10C10.7333 8.66665 11.3333 8.06665 11.3333 7.33331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconForum }

import React, { FC } from 'react'

const IconAnnouncement: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33325H2.66665C1.93331 1.33325 1.33331 1.93325 1.33331 2.66659V14.6666L3.99998 11.9999H13.3333C14.0666 11.9999 14.6666 11.3999 14.6666 10.6666V2.66659C14.6666 1.93325 14.0666 1.33325 13.3333 1.33325ZM7.99998 7.33325C7.63331 7.33325 7.33331 7.03325 7.33331 6.66659V3.99992C7.33331 3.63325 7.63331 3.33325 7.99998 3.33325C8.36665 3.33325 8.66665 3.63325 8.66665 3.99992V6.66659C8.66665 7.03325 8.36665 7.33325 7.99998 7.33325ZM8.66665 9.99992H7.33331V8.66659H8.66665V9.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAnnouncement }

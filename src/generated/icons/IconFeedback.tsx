import React, { FC } from 'react'

const IconFeedback: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3334 1.33325H2.67336C1.94003 1.33325 1.34003 1.93325 1.34003 2.66659V14.6666L4.00003 11.9999H13.3334C14.0667 11.9999 14.6667 11.3999 14.6667 10.6666V2.66659C14.6667 1.93325 14.0667 1.33325 13.3334 1.33325ZM8.66669 9.33325H7.33336V7.99992H8.66669V9.33325ZM8.66669 5.99992C8.66669 6.36659 8.36669 6.66659 8.00003 6.66659C7.63336 6.66659 7.33336 6.36659 7.33336 5.99992V4.66659C7.33336 4.29992 7.63336 3.99992 8.00003 3.99992C8.36669 3.99992 8.66669 4.29992 8.66669 4.66659V5.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFeedback }

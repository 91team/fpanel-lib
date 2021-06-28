import React, { FC } from 'react'

const IconFacebook: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325C4.32 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.2266 3.62667 13.9133 6.66667 14.5333V9.99992H5.33334V7.99992H6.66667V6.33325C6.66667 5.04659 7.71334 3.99992 9 3.99992H10.6667V5.99992H9.33334C8.96667 5.99992 8.66667 6.29992 8.66667 6.66659V7.99992H10.6667V9.99992H8.66667V14.6333C12.0333 14.2999 14.6667 11.4599 14.6667 7.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFacebook }

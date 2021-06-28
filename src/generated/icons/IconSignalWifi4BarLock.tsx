import React, { FC } from 'react'

const IconSignalWifi4BarLock: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M14.3667 6.40667L15.76 4.66667C15.46 4.44 12.4733 2 7.99999 2C3.51999 2 0.53999 4.44 0.23999 4.66667L6.95999 13.04C7.49332 13.7067 8.50666 13.7067 9.03999 13.04L10.3333 11.4267V9.66667C10.3333 7.8 11.8 6.33333 13.6667 6.33333C13.9067 6.33333 14.14 6.36 14.3667 6.40667ZM15.3333 10.6667V9.66667C15.3333 8.73333 14.6 8 13.6667 8C12.7333 8 12 8.73333 12 9.66667V10.6667C11.6667 10.6667 11.3333 11 11.3333 11.3333V14C11.3333 14.3333 11.6667 14.6667 12 14.6667H15.3333C15.6667 14.6667 16 14.3333 16 14V11.3333C16 11 15.6667 10.6667 15.3333 10.6667ZM14.6667 10.6667H12.6667V9.66667C12.6667 9.13333 13.1333 8.66667 13.6667 8.66667C14.2 8.66667 14.6667 9.13333 14.6667 9.66667V10.6667Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalWifi4BarLock }

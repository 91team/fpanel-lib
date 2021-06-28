import React, { FC } from 'react'

const IconQuickreply: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 2.66671C14.6666 1.93337 14.0666 1.33337 13.3333 1.33337H2.66665C1.93331 1.33337 1.33998 1.93337 1.33998 2.66671L1.33331 14.6667L3.99998 12H9.99998V7.33337C9.99998 6.96671 10.3 6.66671 10.6666 6.66671H14.6666V2.66671Z" fill="currentColor"/>
<path d="M14.46 10.6667H13.5333L14.4666 8.46667C14.56 8.24667 14.4 8 14.16 8H11.6666C11.48 8 11.3333 8.14667 11.3333 8.33333V11.6667C11.3333 11.8533 11.48 12 11.6666 12H12.6666V14.6267C12.6666 14.8 12.9066 14.86 12.98 14.7L14.7533 11.1467C14.8666 10.9267 14.7066 10.6667 14.46 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconQuickreply }

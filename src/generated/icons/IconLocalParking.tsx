import React, { FC } from 'react'

const IconLocalParking: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.52667 2H5.33333C4.6 2 4 2.6 4 3.33333V12.6667C4 13.4 4.6 14 5.33333 14C6.06667 14 6.66667 13.4 6.66667 12.6667V10H8.66667C11.0467 10 12.9467 7.91333 12.6333 5.47333C12.3733 3.46 10.56 2 8.52667 2ZM8.8 7.33333H6.66667V4.66667H8.8C9.53333 4.66667 10.1333 5.26667 10.1333 6C10.1333 6.73333 9.53333 7.33333 8.8 7.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalParking }

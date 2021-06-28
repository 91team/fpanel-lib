import React, { FC } from 'react'

const IconSwapVerticalCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33337C4.31999 1.33337 1.33333 4.32004 1.33333 8.00004C1.33333 11.68 4.31999 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8 1.33337ZM4.33333 6.00004L6.43333 3.90004C6.56666 3.76671 6.77333 3.76671 6.90666 3.90004L9 6.00004H7.33333V8.66671H6V6.00004H4.33333ZM9.56666 12.1C9.43333 12.2334 9.22666 12.2334 9.09333 12.1L7 10H8.66666V7.33337H10V10H11.6667L9.56666 12.1Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSwapVerticalCircle }

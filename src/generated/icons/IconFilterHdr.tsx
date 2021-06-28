import React, { FC } from 'react'

const IconFilterHdr: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.79999 4.71336L6.83333 7.33336L8.33333 9.33336C8.55333 9.62669 8.49333 10.0467 8.19999 10.2667C7.90666 10.4867 7.48666 10.4334 7.26666 10.1334C6.56666 9.20003 5.72666 8.08669 5.19999 7.37336C4.93333 7.02003 4.39999 7.02003 4.13333 7.37336L1.46666 10.9267C1.13999 11.3734 1.45333 12 1.99999 12H14C14.5467 12 14.86 11.3734 14.5333 10.9334L9.86666 4.71336C9.59999 4.35336 9.06666 4.35336 8.79999 4.71336Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFilterHdr }

import React, { FC } from 'react'

const IconTrendingUp: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2333 4.56667L12.1933 5.52667L8.94 8.78L6.74666 6.58667C6.48666 6.32667 6.06666 6.32667 5.80666 6.58667L1.80666 10.5933C1.54666 10.8533 1.54666 11.2733 1.80666 11.5333C2.06666 11.7933 2.48666 11.7933 2.74666 11.5333L6.27333 8L8.46666 10.1933C8.72666 10.4533 9.14666 10.4533 9.40666 10.1933L13.1333 6.47333L14.0933 7.43333C14.3 7.64 14.66 7.49333 14.66 7.2V4.33333C14.6667 4.14667 14.52 4 14.3333 4H11.4733C11.1733 4 11.0267 4.36 11.2333 4.56667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTrendingUp }

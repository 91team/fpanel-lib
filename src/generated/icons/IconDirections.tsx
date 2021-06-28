import React, { FC } from 'react'

const IconDirections: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4733 7.52667L8.47332 1.52667C8.21332 1.26667 7.79332 1.26667 7.53332 1.52667L1.53332 7.52667C1.27332 7.78667 1.27332 8.20667 1.53332 8.46667L7.53332 14.4667C7.79332 14.7267 8.21332 14.7267 8.47332 14.4667L14.4733 8.46667C14.7333 8.21333 14.7333 7.79333 14.4733 7.52667ZM9.33332 9.66667V8H6.66665V9.33333C6.66665 9.7 6.36665 10 5.99998 10C5.63332 10 5.33332 9.7 5.33332 9.33333V7.33333C5.33332 6.96667 5.63332 6.66667 5.99998 6.66667H9.33332V5L11.4333 7.1C11.5667 7.23333 11.5667 7.44 11.4333 7.57333L9.33332 9.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDirections }

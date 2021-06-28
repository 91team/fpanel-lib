import React, { FC } from 'react'

const IconAssistantPhoto: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.60001 4.00002L9.44001 3.20002C9.38001 2.89335 9.10668 2.66669 8.78668 2.66669H4.00001C3.63334 2.66669 3.33334 2.96669 3.33334 3.33335V13.3334C3.33334 13.7 3.63334 14 4.00001 14C4.36668 14 4.66668 13.7 4.66668 13.3334V9.33335H8.40001L8.56001 10.1334C8.62001 10.4467 8.89334 10.6667 9.21334 10.6667H12.6667C13.0333 10.6667 13.3333 10.3667 13.3333 10V4.66669C13.3333 4.30002 13.0333 4.00002 12.6667 4.00002H9.60001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAssistantPhoto }

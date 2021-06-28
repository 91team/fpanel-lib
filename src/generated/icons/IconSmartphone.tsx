import React, { FC } from 'react'

const IconSmartphone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 0.673323L4.66666 0.666656C3.93333 0.666656 3.33333 1.26666 3.33333 1.99999V14C3.33333 14.7333 3.93333 15.3333 4.66666 15.3333H11.3333C12.0667 15.3333 12.6667 14.7333 12.6667 14V1.99999C12.6667 1.26666 12.0667 0.673323 11.3333 0.673323ZM11.3333 12.6667H4.66666V3.33332H11.3333V12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSmartphone }

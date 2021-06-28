import React, { FC } from 'react'

const IconStayPrimaryPortrait: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3334 0.673323L4.66669 0.666656C3.93336 0.666656 3.34003 1.26666 3.34003 1.99999V14C3.34003 14.7333 3.93336 15.3333 4.66669 15.3333H11.3334C12.0667 15.3333 12.6667 14.7333 12.6667 14V1.99999C12.6667 1.26666 12.0667 0.673323 11.3334 0.673323ZM11.3334 12.6667H4.66669V3.33332H11.3334V12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStayPrimaryPortrait }

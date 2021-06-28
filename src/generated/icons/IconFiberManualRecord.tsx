import React, { FC } from 'react'

const IconFiberManualRecord: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00002 13.3334C10.9455 13.3334 13.3334 10.9456 13.3334 8.00008C13.3334 5.05456 10.9455 2.66675 8.00002 2.66675C5.0545 2.66675 2.66669 5.05456 2.66669 8.00008C2.66669 10.9456 5.0545 13.3334 8.00002 13.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFiberManualRecord }

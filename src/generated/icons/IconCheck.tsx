import React, { FC } from 'react'

const IconCheck: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.78L3.68667 8.46667C3.42667 8.20667 3.00667 8.20667 2.74667 8.46667C2.48667 8.72667 2.48667 9.14667 2.74667 9.40667L5.53333 12.1933C5.79333 12.4533 6.21333 12.4533 6.47333 12.1933L13.5267 5.14C13.7867 4.88 13.7867 4.46 13.5267 4.2C13.2667 3.94 12.8467 3.94 12.5867 4.2L6 10.78Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCheck }

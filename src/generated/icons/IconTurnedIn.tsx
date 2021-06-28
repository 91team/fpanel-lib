import React, { FC } from 'react'

const IconTurnedIn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 2H4.66668C3.93334 2 3.34001 2.6 3.34001 3.33333L3.33334 14L8.00001 12L12.6667 14V3.33333C12.6667 2.6 12.0667 2 11.3333 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTurnedIn }

import React, { FC } from 'react'

const IconToggleOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 4.66675H4.66667C2.82667 4.66675 1.33334 6.16008 1.33334 8.00008C1.33334 9.84008 2.82667 11.3334 4.66667 11.3334H11.3333C13.1733 11.3334 14.6667 9.84008 14.6667 8.00008C14.6667 6.16008 13.1733 4.66675 11.3333 4.66675ZM4.66667 10.0001C3.56 10.0001 2.66667 9.10675 2.66667 8.00008C2.66667 6.89341 3.56 6.00008 4.66667 6.00008C5.77334 6.00008 6.66667 6.89341 6.66667 8.00008C6.66667 9.10675 5.77334 10.0001 4.66667 10.0001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconToggleOff }

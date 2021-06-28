import React, { FC } from 'react'

const IconToggleOn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 4.66675H4.66665C2.82665 4.66675 1.33331 6.16008 1.33331 8.00008C1.33331 9.84008 2.82665 11.3334 4.66665 11.3334H11.3333C13.1733 11.3334 14.6666 9.84008 14.6666 8.00008C14.6666 6.16008 13.1733 4.66675 11.3333 4.66675ZM11.3333 10.0001C10.2266 10.0001 9.33331 9.10675 9.33331 8.00008C9.33331 6.89341 10.2266 6.00008 11.3333 6.00008C12.44 6.00008 13.3333 6.89341 13.3333 8.00008C13.3333 9.10675 12.44 10.0001 11.3333 10.0001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconToggleOn }

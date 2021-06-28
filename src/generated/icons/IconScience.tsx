import React, { FC } from 'react'

const IconScience: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 12.2667L9.33334 7.11341V4.33341L10.2333 3.20675C10.4067 2.98675 10.2533 2.66675 9.97334 2.66675H6.02667C5.74667 2.66675 5.59334 2.98675 5.76667 3.20675L6.66667 4.33341V7.11341L2.8 12.2667C2.47334 12.7067 2.78667 13.3334 3.33334 13.3334H12.6667C13.2133 13.3334 13.5267 12.7067 13.2 12.2667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconScience }

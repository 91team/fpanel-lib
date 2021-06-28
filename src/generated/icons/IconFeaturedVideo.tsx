import React, { FC } from 'react'

const IconFeaturedVideo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H1.99999C1.26666 2 0.666656 2.6 0.666656 3.33333V12.6667C0.666656 13.4 1.26666 14 1.99999 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM7.33332 8H2.66666C2.29999 8 1.99999 7.7 1.99999 7.33333V4C1.99999 3.63333 2.29999 3.33333 2.66666 3.33333H7.33332C7.69999 3.33333 7.99999 3.63333 7.99999 4V7.33333C7.99999 7.7 7.69999 8 7.33332 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFeaturedVideo }

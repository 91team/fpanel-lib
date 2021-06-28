import React, { FC } from 'react'

const IconDetails: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.42 3.04667L1.88666 13.0067C1.64 13.4533 1.96 14 2.46666 14H13.5333C14.04 14 14.36 13.4533 14.1133 13.0067L8.58 3.04667C8.32666 2.59333 7.67333 2.59333 7.42 3.04667ZM8.66666 5.94667L12.4 12.6667H8.66666V5.94667ZM7.33333 5.94667V12.6667H3.6L7.33333 5.94667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDetails }

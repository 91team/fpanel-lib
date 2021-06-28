import React, { FC } from 'react'

const IconToggles: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1H5C3.344 1 2 2.344 2 4C2 5.656 3.344 7 5 7H11C12.656 7 14 5.656 14 4C14 2.344 12.656 1 11 1ZM11 5.8C10.004 5.8 9.2 4.996 9.2 4C9.2 3.004 10.004 2.2 11 2.2C11.996 2.2 12.8 3.004 12.8 4C12.8 4.996 11.996 5.8 11 5.8Z" fill="currentColor"/>
<path d="M5 8.25H11C12.5179 8.25 13.75 9.48207 13.75 11C13.75 12.5179 12.5179 13.75 11 13.75H5C3.48207 13.75 2.25 12.5179 2.25 11C2.25 9.48207 3.48207 8.25 5 8.25Z" stroke="currentColor" stroke-width="0.5"/>
<circle cx="5" cy="11" r="2" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconToggles }

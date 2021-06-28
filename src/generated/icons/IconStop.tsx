import React, { FC } from 'react'

const IconStop: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 4H10.6667C11.4 4 12 4.6 12 5.33333V10.6667C12 11.4 11.4 12 10.6667 12H5.33333C4.6 12 4 11.4 4 10.6667V5.33333C4 4.6 4.6 4 5.33333 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStop }

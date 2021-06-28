import React, { FC } from 'react'

const IconPriorityHigh: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 14C8.73638 14 9.33334 13.4031 9.33334 12.6667C9.33334 11.9303 8.73638 11.3334 8.00001 11.3334C7.26363 11.3334 6.66667 11.9303 6.66667 12.6667C6.66667 13.4031 7.26363 14 8.00001 14Z" fill="currentColor"/>
<path d="M8.00001 2C7.26667 2 6.66667 2.6 6.66667 3.33333V8.66667C6.66667 9.4 7.26667 10 8.00001 10C8.73334 10 9.33334 9.4 9.33334 8.66667V3.33333C9.33334 2.6 8.73334 2 8.00001 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPriorityHigh }

import React, { FC } from 'react'

const IconCompare: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 2.00002H3.33333C2.6 2.00002 2 2.60002 2 3.33335V12.6667C2 13.4 2.6 14 3.33333 14H6.66667V14.6667C6.66667 15.0334 6.96667 15.3334 7.33333 15.3334C7.7 15.3334 8 15.0334 8 14.6667V1.33335C8 0.966687 7.7 0.666687 7.33333 0.666687C6.96667 0.666687 6.66667 0.966687 6.66667 1.33335V2.00002ZM6.66667 12H3.33333L6.66667 8.00002V12ZM12.6667 2.00002H9.33333V3.33335H12C12.3667 3.33335 12.6667 3.63335 12.6667 4.00002V12L9.33333 8.00002V14H12.6667C13.4 14 14 13.4 14 12.6667V3.33335C14 2.60002 13.4 2.00002 12.6667 2.00002Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCompare }

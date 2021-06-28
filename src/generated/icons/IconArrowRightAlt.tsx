import React, { FC } from 'react'

const IconArrowRightAlt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6733 7.33322H3.33334C2.96667 7.33322 2.66667 7.63322 2.66667 7.99989C2.66667 8.36656 2.96667 8.66656 3.33334 8.66656H10.6733V9.85989C10.6733 10.1599 11.0333 10.3066 11.24 10.0932L13.0933 8.23322C13.22 8.09989 13.22 7.89322 13.0933 7.75989L11.24 5.89989C11.0333 5.68656 10.6733 5.83989 10.6733 6.13322V7.33322Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowRightAlt }

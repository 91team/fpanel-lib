import React, { FC } from 'react'

const IconVignette: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00002C1.26669 2 0.666687 2.6 0.666687 3.33333V12.6667C0.666687 13.4 1.26669 14 2.00002 14H14C14.7334 14 15.3334 13.4 15.3334 12.6667V3.33333C15.3334 2.6 14.7334 2 14 2ZM8.00002 12C5.05335 12 2.66669 10.2067 2.66669 8C2.66669 5.79333 5.05335 4 8.00002 4C10.9467 4 13.3334 5.79333 13.3334 8C13.3334 10.2067 10.9467 12 8.00002 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVignette }

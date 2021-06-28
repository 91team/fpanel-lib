import React, { FC } from 'react'

const IconExplore: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 7.26659C7.59334 7.26659 7.26668 7.59325 7.26668 7.99992C7.26668 8.40659 7.59334 8.73325 8.00001 8.73325C8.40668 8.73325 8.73334 8.40659 8.73334 7.99992C8.73334 7.59325 8.40668 7.26659 8.00001 7.26659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM9.46001 9.45992L4.00001 11.9999L6.54001 6.53992L12 3.99992L9.46001 9.45992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExplore }

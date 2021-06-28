import React, { FC } from 'react'

const IconInfoOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33334 4.66659H8.66668V5.99992H7.33334V4.66659ZM8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V7.99992C8.66668 7.63325 8.36668 7.33325 8.00001 7.33325C7.63334 7.33325 7.33334 7.63325 7.33334 7.99992V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInfoOutline }

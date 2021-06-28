import React, { FC } from 'react'

const IconInfo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 11.3333C7.63334 11.3333 7.33334 11.0333 7.33334 10.6666V7.99992C7.33334 7.63325 7.63334 7.33325 8.00001 7.33325C8.36668 7.33325 8.66668 7.63325 8.66668 7.99992V10.6666C8.66668 11.0333 8.36668 11.3333 8.00001 11.3333ZM8.66668 5.99992H7.33334V4.66659H8.66668V5.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInfo }

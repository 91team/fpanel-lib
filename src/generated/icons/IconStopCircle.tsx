import React, { FC } from 'react'

const IconStopCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 10.6666H10C10.3667 10.6666 10.6667 10.3666 10.6667 9.99992V5.99992C10.6667 5.63325 10.3667 5.33325 10 5.33325H6.00001C5.63334 5.33325 5.33334 5.63325 5.33334 5.99992V9.99992C5.33334 10.3666 5.63334 10.6666 6.00001 10.6666ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStopCircle }

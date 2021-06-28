import React, { FC } from 'react'

const IconUpgrade: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 12.6666C10.6667 13.0333 10.3667 13.3333 10 13.3333H6C5.63334 13.3333 5.33334 13.0333 5.33334 12.6666C5.33334 12.3 5.63334 12 6 12H10C10.3667 12 10.6667 12.3 10.6667 12.6666ZM7.33334 5.32664V9.99998C7.33334 10.3666 7.63334 10.6666 8 10.6666C8.36667 10.6666 8.66667 10.3666 8.66667 9.99998V5.32664H9.86C10.16 5.32664 10.3067 4.96665 10.0933 4.75998L8.23334 2.90665C8.1 2.77998 7.89334 2.77998 7.76 2.90665L5.90667 4.75998C5.69334 4.96665 5.84 5.32664 6.14 5.32664H7.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconUpgrade }

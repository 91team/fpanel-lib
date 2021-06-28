import React, { FC } from 'react'

const IconNextPlan: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99998 1.33325C4.31998 1.33325 1.33331 4.31992 1.33331 7.99992C1.33331 11.6799 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.68 1.33325 7.99998 1.33325ZM12 9.31325H8.66665L10.1733 7.80659C9.56665 7.09992 8.67331 6.64659 7.66665 6.64659C6.08665 6.64659 4.76665 7.75325 4.42665 9.23325L3.78665 9.01992C4.21331 7.27325 5.78665 5.97992 7.66665 5.97992C8.85331 5.97992 9.91331 6.50659 10.6466 7.33325L12 5.97992V9.31325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNextPlan }

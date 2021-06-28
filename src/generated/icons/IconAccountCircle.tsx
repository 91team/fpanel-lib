import React, { FC } from 'react'

const IconAccountCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33325C4.31999 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM8 3.33325C9.10666 3.33325 10 4.22659 10 5.33325C10 6.43992 9.10666 7.33325 8 7.33325C6.89333 7.33325 6 6.43992 6 5.33325C6 4.22659 6.89333 3.33325 8 3.33325ZM8 12.7999C6.33333 12.7999 4.85999 11.9466 3.99999 10.6533C4.01999 9.32659 6.66666 8.59992 8 8.59992C9.32666 8.59992 11.98 9.32659 12 10.6533C11.14 11.9466 9.66666 12.7999 8 12.7999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAccountCircle }

import React, { FC } from 'react'

const IconBuildCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.33325C4.31999 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM11.0267 10.5666L10.5667 11.0266C10.3067 11.2866 9.88666 11.2866 9.62666 11.0266L7.59333 8.99325C6.78 9.27992 5.83333 9.10659 5.18 8.45325C4.44 7.71325 4.31333 6.59325 4.78666 5.71992L6.35333 7.28659L7.29333 6.34659L5.72 4.77992C6.6 4.30659 7.71333 4.43325 8.45333 5.17325C9.10666 5.82659 9.27999 6.77325 8.99333 7.58659L11.0267 9.61992C11.2867 9.87992 11.2867 10.3066 11.0267 10.5666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBuildCircle }

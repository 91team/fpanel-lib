import React, { FC } from 'react'

const IconMore: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M14.6667 2H4.66666C4.20666 2 3.84666 2.23333 3.60666 2.58667L0.246658 7.63333C0.099991 7.86 0.099991 8.14667 0.246658 8.37333L3.60666 13.4133C3.84666 13.76 4.25332 14 4.71333 14H14.6667C15.4 14 16 13.4 16 12.6667V3.33333C16 2.6 15.4 2 14.6667 2ZM5.99999 9C5.44666 9 4.99999 8.55333 4.99999 8C4.99999 7.44667 5.44666 7 5.99999 7C6.55333 7 6.99999 7.44667 6.99999 8C6.99999 8.55333 6.55333 9 5.99999 9ZM9.33333 9C8.77999 9 8.33333 8.55333 8.33333 8C8.33333 7.44667 8.77999 7 9.33333 7C9.88666 7 10.3333 7.44667 10.3333 8C10.3333 8.55333 9.88666 9 9.33333 9ZM12.6667 9C12.1133 9 11.6667 8.55333 11.6667 8C11.6667 7.44667 12.1133 7 12.6667 7C13.22 7 13.6667 7.44667 13.6667 8C13.6667 8.55333 13.22 9 12.6667 9Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMore }

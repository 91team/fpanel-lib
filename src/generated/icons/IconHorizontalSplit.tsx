import React, { FC } from 'react'

const IconHorizontalSplit: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66667 12.6666H13.3333C13.7 12.6666 14 12.3666 14 11.9999V9.33325C14 8.96659 13.7 8.66659 13.3333 8.66659H2.66667C2.3 8.66659 2 8.96659 2 9.33325V11.9999C2 12.3666 2.3 12.6666 2.66667 12.6666ZM2.66667 7.33325H13.3333C13.7 7.33325 14 7.03325 14 6.66659C14 6.29992 13.7 5.99992 13.3333 5.99992H2.66667C2.3 5.99992 2 6.29992 2 6.66659C2 7.03325 2.3 7.33325 2.66667 7.33325ZM2 3.99992C2 4.36659 2.3 4.66659 2.66667 4.66659H13.3333C13.7 4.66659 14 4.36659 14 3.99992C14 3.63325 13.7 3.33325 13.3333 3.33325H2.66667C2.3 3.33325 2 3.63325 2 3.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHorizontalSplit }

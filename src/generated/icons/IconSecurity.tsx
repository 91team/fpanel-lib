import React, { FC } from 'react'

const IconSecurity: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46 0.906656L2.79333 2.97999C2.31333 3.19332 2 3.67332 2 4.19999V7.33332C2 11.0333 4.56 14.4933 8 15.3333C11.44 14.4933 14 11.0333 14 7.33332V4.19999C14 3.67332 13.6867 3.19332 13.2067 2.97999L8.54 0.906656C8.2 0.753323 7.8 0.753323 7.46 0.906656ZM8 7.99332H12.6667C12.3133 10.74 10.48 13.1867 8 13.9533V7.99999H3.33333V4.19999L8 2.12666V7.99332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSecurity }

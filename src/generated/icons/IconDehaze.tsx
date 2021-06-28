import React, { FC } from 'react'

const IconDehaze: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33333 11.3333C1.33333 11.7 1.63333 12 1.99999 12H14C14.3667 12 14.6667 11.7 14.6667 11.3333C14.6667 10.9667 14.3667 10.6667 14 10.6667H1.99999C1.63333 10.6667 1.33333 10.9667 1.33333 11.3333ZM1.33333 8C1.33333 8.36667 1.63333 8.66667 1.99999 8.66667H14C14.3667 8.66667 14.6667 8.36667 14.6667 8C14.6667 7.63333 14.3667 7.33333 14 7.33333H1.99999C1.63333 7.33333 1.33333 7.63333 1.33333 8ZM1.33333 4.66667C1.33333 5.03333 1.63333 5.33333 1.99999 5.33333H14C14.3667 5.33333 14.6667 5.03333 14.6667 4.66667C14.6667 4.3 14.3667 4 14 4H1.99999C1.63333 4 1.33333 4.3 1.33333 4.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDehaze }

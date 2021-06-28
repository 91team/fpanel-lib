import React, { FC } from 'react'

const IconMinimize: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 8H11.3333C11.7 8 12 8.3 12 8.66667C12 9.03333 11.7 9.33333 11.3333 9.33333H4.66667C4.3 9.33333 4 9.03333 4 8.66667C4 8.3 4.3 8 4.66667 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMinimize }

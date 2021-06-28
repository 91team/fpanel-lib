import React, { FC } from 'react'

const IconMaximize: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66667 2H13.3333C13.7 2 14 2.3 14 2.66667C14 3.03333 13.7 3.33333 13.3333 3.33333H2.66667C2.3 3.33333 2 3.03333 2 2.66667C2 2.3 2.3 2 2.66667 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMaximize }

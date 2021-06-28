import React, { FC } from 'react'

const IconSkipNext: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05333 11.26L8.9 8.54667C9.27333 8.28 9.27333 7.72 8.9 7.46L5.05333 4.74C4.60667 4.43333 4 4.74667 4 5.28667V10.7133C4 11.2533 4.60667 11.5667 5.05333 11.26ZM10.6667 4.66667V11.3333C10.6667 11.7 10.9667 12 11.3333 12C11.7 12 12 11.7 12 11.3333V4.66667C12 4.3 11.7 4 11.3333 4C10.9667 4 10.6667 4.3 10.6667 4.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSkipNext }

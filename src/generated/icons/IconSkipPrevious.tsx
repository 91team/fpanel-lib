import React, { FC } from 'react'

const IconSkipPrevious: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 4C5.03333 4 5.33333 4.3 5.33333 4.66667V11.3333C5.33333 11.7 5.03333 12 4.66667 12C4.3 12 4 11.7 4 11.3333V4.66667C4 4.3 4.3 4 4.66667 4ZM7.10667 8.54667L10.9533 11.26C11.3933 11.5733 12.0067 11.2533 12.0067 10.7133V5.28667C12.0067 4.74667 11.4 4.43333 10.9533 4.74L7.10667 7.45333C6.72667 7.72 6.72667 8.28 7.10667 8.54667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSkipPrevious }

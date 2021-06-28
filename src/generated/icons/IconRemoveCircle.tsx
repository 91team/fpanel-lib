import React, { FC } from 'react'

const IconRemoveCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33331C4.31999 1.33331 1.33333 4.31998 1.33333 7.99998C1.33333 11.68 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99998C14.6667 4.31998 11.68 1.33331 8 1.33331ZM10.6667 8.66665H5.33333C4.96666 8.66665 4.66666 8.36665 4.66666 7.99998C4.66666 7.63331 4.96666 7.33331 5.33333 7.33331H10.6667C11.0333 7.33331 11.3333 7.63331 11.3333 7.99998C11.3333 8.36665 11.0333 8.66665 10.6667 8.66665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRemoveCircle }

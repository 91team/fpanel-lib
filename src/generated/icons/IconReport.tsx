import React, { FC } from 'react'

const IconReport: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2133 2H5.78667C5.61333 2 5.44 2.07333 5.32 2.19333L2.19333 5.32C2.07333 5.44 2 5.61333 2 5.78667V10.2067C2 10.3867 2.07333 10.5533 2.19333 10.68L5.31333 13.8C5.44 13.9267 5.61333 14 5.78667 14H10.2067C10.3867 14 10.5533 13.9267 10.68 13.8067L13.8 10.6867C13.9267 10.56 13.9933 10.3933 13.9933 10.2133V5.78667C13.9933 5.60667 13.92 5.44 13.8 5.31333L10.68 2.19333C10.56 2.07333 10.3867 2 10.2133 2ZM8 11.5333C7.52 11.5333 7.13333 11.1467 7.13333 10.6667C7.13333 10.1867 7.52 9.8 8 9.8C8.48 9.8 8.86667 10.1867 8.86667 10.6667C8.86667 11.1467 8.48 11.5333 8 11.5333ZM8 8.66667C7.63333 8.66667 7.33333 8.36667 7.33333 8V5.33333C7.33333 4.96667 7.63333 4.66667 8 4.66667C8.36667 4.66667 8.66667 4.96667 8.66667 5.33333V8C8.66667 8.36667 8.36667 8.66667 8 8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconReport }

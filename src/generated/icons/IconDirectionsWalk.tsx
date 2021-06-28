import React, { FC } from 'react'

const IconDirectionsWalk: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3.66667C9.73333 3.66667 10.3333 3.06667 10.3333 2.33333C10.3333 1.6 9.73333 1 9 1C8.26667 1 7.66667 1.6 7.66667 2.33333C7.66667 3.06667 8.26667 3.66667 9 3.66667ZM6.53333 5.93333L4.82667 14.54C4.74 14.9467 5.06 15.3333 5.48 15.3333H5.53333C5.84667 15.3333 6.11333 15.12 6.18667 14.8133L7.26667 10L8.66667 11.3333V14.6667C8.66667 15.0333 8.96667 15.3333 9.33333 15.3333C9.7 15.3333 10 15.0333 10 14.6667V10.9067C10 10.54 9.85333 10.1933 9.58667 9.94L8.6 9L9 7C9.71333 7.82667 10.7467 8.42 11.9067 8.60667C12.3067 8.66667 12.6667 8.34667 12.6667 7.94C12.6667 7.61333 12.4267 7.34 12.1 7.28667C11.0867 7.12 10.2467 6.52 9.8 5.73333L9.13333 4.66667C8.76 4.07333 8.01333 3.83333 7.36667 4.10667L4.81333 5.18667C4.32 5.4 4 5.88 4 6.42V8C4 8.36667 4.3 8.66667 4.66667 8.66667C5.03333 8.66667 5.33333 8.36667 5.33333 8V6.4L6.53333 5.93333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDirectionsWalk }

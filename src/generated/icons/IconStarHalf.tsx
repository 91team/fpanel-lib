import React, { FC } from 'react'

const IconStarHalf: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1 6.02667L9.87334 5.74667L8.61334 2.78C8.38667 2.24 7.61334 2.24 7.38667 2.78L6.12667 5.75333L2.90667 6.02667C2.32 6.07333 2.08 6.80667 2.52667 7.19333L4.97334 9.31333L4.24 12.46C4.10667 13.0333 4.72667 13.4867 5.23334 13.18L8 11.5133L10.7667 13.1867C11.2733 13.4933 11.8933 13.04 11.76 12.4667L11.0267 9.31333L13.4733 7.19333C13.92 6.80667 13.6867 6.07333 13.1 6.02667ZM8 10.2667V4.06667L9.14 6.76L12.06 7.01333L9.84667 8.93333L10.5133 11.7867L8 10.2667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStarHalf }

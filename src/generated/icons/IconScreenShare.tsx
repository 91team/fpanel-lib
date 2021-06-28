import React, { FC } from 'react'

const IconScreenShare: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 12C14.0667 12 14.6667 11.4 14.6667 10.6667V4.00002C14.6667 3.26669 14.0667 2.66669 13.3333 2.66669H2.66667C1.93333 2.66669 1.33333 3.26669 1.33333 4.00002V10.6667C1.33333 11.4 1.92667 12 2.66667 12H0.666667C0.3 12 0 12.3 0 12.6667C0 13.0334 0.3 13.3334 0.666667 13.3334H15.3333C15.7 13.3334 16 13.0334 16 12.6667C16 12.3 15.7 12 15.3333 12H13.3333ZM8.66667 9.64669V8.18669C6.81333 8.18669 5.59333 8.75335 4.66667 10C5.04 8.22002 6.07333 6.44669 8.66667 6.08669V4.66669L11.0733 6.90669C11.2133 7.04002 11.2133 7.26002 11.0733 7.39335L8.66667 9.64669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconScreenShare }

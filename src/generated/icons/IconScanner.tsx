import React, { FC } from 'react'

const IconScanner: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 7.13333L3.43333 3.56666C3.08667 3.43999 2.7 3.61999 2.56667 3.96666C2.44 4.31999 2.62 4.70666 2.96667 4.83333L11.7333 8H3.33333C2.6 8 2 8.6 2 9.33333V12C2 12.7333 2.6 13.3333 3.33333 13.3333H12.6667C13.4 13.3333 14 12.7333 14 12V8.33333C14 7.79999 13.6667 7.26666 13.2 7.13333ZM4.66667 11.3333H3.33333V10H4.66667V11.3333ZM12 11.3333H6.66667C6.3 11.3333 6 11.0333 6 10.6667C6 10.3 6.3 10 6.66667 10H12C12.3667 10 12.6667 10.3 12.6667 10.6667C12.6667 11.0333 12.3667 11.3333 12 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconScanner }

import React, { FC } from 'react'

const IconCategory: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.43333 2.26666L4.95333 6.31999C4.68 6.75999 5 7.33332 5.52 7.33332H10.4733C10.9933 7.33332 11.3133 6.75999 11.04 6.31999L8.56666 2.26666C8.30666 1.83999 7.69333 1.83999 7.43333 2.26666Z" fill="currentColor"/>
<path d="M11.6667 14.6667C13.3235 14.6667 14.6667 13.3235 14.6667 11.6667C14.6667 10.0098 13.3235 8.66669 11.6667 8.66669C10.0098 8.66669 8.66666 10.0098 8.66666 11.6667C8.66666 13.3235 10.0098 14.6667 11.6667 14.6667Z" fill="currentColor"/>
<path d="M2.66667 14.3333H6.66667C7.03333 14.3333 7.33333 14.0333 7.33333 13.6667V9.66667C7.33333 9.3 7.03333 9 6.66667 9H2.66667C2.3 9 2 9.3 2 9.66667V13.6667C2 14.0333 2.3 14.3333 2.66667 14.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCategory }

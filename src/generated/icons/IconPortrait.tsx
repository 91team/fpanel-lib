import React, { FC } from 'react'

const IconPortrait: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.16667C8.82667 8.16667 9.5 7.49333 9.5 6.66667C9.5 5.84 8.82667 5.16667 8 5.16667C7.17333 5.16667 6.5 5.84 6.5 6.66667C6.5 7.49333 7.17333 8.16667 8 8.16667ZM11 10.8333C11 9.83333 9 9.33333 8 9.33333C7 9.33333 5 9.83333 5 10.8333V11.3333H11V10.8333ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V12C12.6667 12.3667 12.3667 12.6667 12 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPortrait }

import React, { FC } from 'react'

const IconBackspace: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M14.6667 2H4.66666C4.20666 2 3.84666 2.23333 3.60666 2.58667L0.246658 7.63333C0.099991 7.86 0.099991 8.14667 0.246658 8.37333L3.60666 13.4133C3.84666 13.76 4.20666 14 4.66666 14H14.6667C15.4 14 16 13.4 16 12.6667V3.33333C16 2.6 15.4 2 14.6667 2ZM12.2 10.8667C11.94 11.1267 11.52 11.1267 11.26 10.8667L9.33333 8.94L7.40666 10.8667C7.14666 11.1267 6.72666 11.1267 6.46666 10.8667C6.20666 10.6067 6.20666 10.1867 6.46666 9.92667L8.39333 8L6.46666 6.07333C6.20666 5.81333 6.20666 5.39333 6.46666 5.13333C6.72666 4.87333 7.14666 4.87333 7.40666 5.13333L9.33333 7.06L11.26 5.13333C11.52 4.87333 11.94 4.87333 12.2 5.13333C12.46 5.39333 12.46 5.81333 12.2 6.07333L10.2733 8L12.2 9.92667C12.4533 10.18 12.4533 10.6067 12.2 10.8667Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBackspace }

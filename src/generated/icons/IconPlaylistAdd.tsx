import React, { FC } from 'react'

const IconPlaylistAdd: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66665 6.66667H1.99998C1.63331 6.66667 1.33331 6.96667 1.33331 7.33333C1.33331 7.7 1.63331 8 1.99998 8H8.66665C9.03331 8 9.33331 7.7 9.33331 7.33333C9.33331 6.96667 9.03331 6.66667 8.66665 6.66667ZM8.66665 4H1.99998C1.63331 4 1.33331 4.3 1.33331 4.66667C1.33331 5.03333 1.63331 5.33333 1.99998 5.33333H8.66665C9.03331 5.33333 9.33331 5.03333 9.33331 4.66667C9.33331 4.3 9.03331 4 8.66665 4ZM12 9.33333V7.33333C12 6.96667 11.7 6.66667 11.3333 6.66667C10.9666 6.66667 10.6666 6.96667 10.6666 7.33333V9.33333H8.66665C8.29998 9.33333 7.99998 9.63333 7.99998 10C7.99998 10.3667 8.29998 10.6667 8.66665 10.6667H10.6666V12.6667C10.6666 13.0333 10.9666 13.3333 11.3333 13.3333C11.7 13.3333 12 13.0333 12 12.6667V10.6667H14C14.3666 10.6667 14.6666 10.3667 14.6666 10C14.6666 9.63333 14.3666 9.33333 14 9.33333H12ZM1.99998 10.6667H5.99998C6.36665 10.6667 6.66665 10.3667 6.66665 10C6.66665 9.63333 6.36665 9.33333 5.99998 9.33333H1.99998C1.63331 9.33333 1.33331 9.63333 1.33331 10C1.33331 10.3667 1.63331 10.6667 1.99998 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPlaylistAdd }

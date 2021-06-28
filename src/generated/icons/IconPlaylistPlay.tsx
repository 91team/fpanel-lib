import React, { FC } from 'react'

const IconPlaylistPlay: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 6.66667H10C10.3667 6.66667 10.6667 6.96667 10.6667 7.33333C10.6667 7.7 10.3667 8 10 8H3.33333C2.96666 8 2.66666 7.7 2.66666 7.33333C2.66666 6.96667 2.96666 6.66667 3.33333 6.66667ZM3.33333 4H10C10.3667 4 10.6667 4.3 10.6667 4.66667C10.6667 5.03333 10.3667 5.33333 10 5.33333H3.33333C2.96666 5.33333 2.66666 5.03333 2.66666 4.66667C2.66666 4.3 2.96666 4 3.33333 4ZM3.33333 9.33333H7.33333C7.7 9.33333 8 9.63333 8 10C8 10.3667 7.7 10.6667 7.33333 10.6667H3.33333C2.96666 10.6667 2.66666 10.3667 2.66666 10C2.66666 9.63333 2.96666 9.33333 3.33333 9.33333ZM9.33333 9.92V12.74C9.33333 13 9.61333 13.16 9.84 13.0267L12.1933 11.6133C12.4067 11.4867 12.4067 11.1733 12.1933 11.04L9.84 9.62667C9.61333 9.5 9.33333 9.66 9.33333 9.92Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPlaylistPlay }

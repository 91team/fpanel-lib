import React, { FC } from 'react'

const IconRoomService: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99998 11.3333H14C14.3666 11.3333 14.6666 11.6333 14.6666 11.9999C14.6666 12.3666 14.3666 12.6666 14 12.6666H1.99998C1.63331 12.6666 1.33331 12.3666 1.33331 11.9999C1.33331 11.6333 1.63331 11.3333 1.99998 11.3333ZM9.22665 5.19325C9.29331 5.03325 9.33331 4.85325 9.33331 4.66659C9.33331 3.93325 8.73331 3.33325 7.99998 3.33325C7.26665 3.33325 6.66665 3.93325 6.66665 4.66659C6.66665 4.85325 6.70665 5.03325 6.77331 5.19325C4.16665 5.73325 2.17998 7.95325 1.99998 10.6666H14C13.82 7.95325 11.8333 5.73325 9.22665 5.19325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRoomService }

import React, { FC } from 'react'

const IconFormatSize: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.66666C6 4.21999 6.44667 4.66666 7 4.66666H9.33333V11.6667C9.33333 12.22 9.78 12.6667 10.3333 12.6667C10.8867 12.6667 11.3333 12.22 11.3333 11.6667V4.66666H13.6667C14.22 4.66666 14.6667 4.21999 14.6667 3.66666C14.6667 3.11332 14.22 2.66666 13.6667 2.66666H7C6.44667 2.66666 6 3.11332 6 3.66666ZM3 7.99999H4V11.6667C4 12.22 4.44667 12.6667 5 12.6667C5.55333 12.6667 6 12.22 6 11.6667V7.99999H7C7.55333 7.99999 8 7.55332 8 6.99999C8 6.44666 7.55333 5.99999 7 5.99999H3C2.44667 5.99999 2 6.44666 2 6.99999C2 7.55332 2.44667 7.99999 3 7.99999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatSize }

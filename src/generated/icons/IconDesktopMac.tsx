import React, { FC } from 'react'

const IconDesktopMac: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.33333H1.99999C1.26666 1.33333 0.666656 1.93333 0.666656 2.66666V10.6667C0.666656 11.4 1.26666 12 1.99999 12H6.66666L5.57999 13.6333C5.28666 14.0733 5.59999 14.6667 6.13332 14.6667H9.86666C10.4 14.6667 10.72 14.0733 10.42 13.6333L9.33332 12H14C14.7333 12 15.3333 11.4 15.3333 10.6667V2.66666C15.3333 1.93333 14.7333 1.33333 14 1.33333ZM14 9.33333H1.99999V3.33333C1.99999 2.96666 2.29999 2.66666 2.66666 2.66666H13.3333C13.7 2.66666 14 2.96666 14 3.33333V9.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDesktopMac }

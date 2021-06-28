import React, { FC } from 'react'

const IconBubbleChart: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79999 11.7333C5.9782 11.7333 6.93332 10.7782 6.93332 9.60001C6.93332 8.4218 5.9782 7.46667 4.79999 7.46667C3.62178 7.46667 2.66666 8.4218 2.66666 9.60001C2.66666 10.7782 3.62178 11.7333 4.79999 11.7333Z" fill="currentColor"/>
<path d="M9.86666 13.3333C10.603 13.3333 11.2 12.7364 11.2 12C11.2 11.2636 10.603 10.6667 9.86666 10.6667C9.13028 10.6667 8.53333 11.2636 8.53333 12C8.53333 12.7364 9.13028 13.3333 9.86666 13.3333Z" fill="currentColor"/>
<path d="M10.1333 9.06669C11.9007 9.06669 13.3333 7.634 13.3333 5.86669C13.3333 4.09938 11.9007 2.66669 10.1333 2.66669C8.36604 2.66669 6.93335 4.09938 6.93335 5.86669C6.93335 7.634 8.36604 9.06669 10.1333 9.06669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBubbleChart }

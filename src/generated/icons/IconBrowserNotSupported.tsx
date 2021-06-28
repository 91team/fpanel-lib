import React, { FC } from 'react'

const IconBrowserNotSupported: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 3.99999V11L13.9667 12.3C13.9867 12.2 14 12.1 14 12V3.99999C14 3.26666 13.4 2.66666 12.6667 2.66666H4.33334L5.66667 3.99999H12.6667Z" fill="currentColor"/>
<path d="M2.57333 2.63333C2.34 2.39999 1.96 2.39999 1.72667 2.63333C1.49333 2.86666 1.49333 3.24666 1.72667 3.47999L2 3.75999V12C2 12.7333 2.6 13.3333 3.33333 13.3333H11.5733L12.52 14.28C12.7533 14.5133 13.1333 14.5133 13.3667 14.28C13.6 14.0467 13.6 13.6667 13.3667 13.4333L2.57333 2.63333ZM3.33333 12V5.09333L10.24 12H3.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrowserNotSupported }

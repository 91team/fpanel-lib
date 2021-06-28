import React, { FC } from 'react'

const IconFormatClear: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 5.33334C12.8867 5.33334 13.3333 4.88668 13.3333 4.33334C13.3333 3.78001 12.8867 3.33334 12.3333 3.33334H4.26L6.26 5.33334H7.48L7.11333 6.18668L8.50666 7.58001L9.47333 5.33334H12.3333ZM11.6267 12.5867L2.74666 3.70668C2.48666 3.44668 2.06666 3.44668 1.80666 3.70668C1.54666 3.96668 1.54666 4.38668 1.80666 4.64668L5.98 8.82001L4.88 11.38C4.62 11.9933 5.06666 12.6667 5.72666 12.6667C6.09333 12.6667 6.42666 12.4467 6.57333 12.1067L7.38 10.22L10.68 13.52C10.94 13.78 11.36 13.78 11.62 13.52C11.8867 13.2667 11.8867 12.8467 11.6267 12.5867Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatClear }

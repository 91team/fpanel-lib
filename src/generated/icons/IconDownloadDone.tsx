import React, { FC } from 'react'

const IconDownloadDone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99998 12H12C12.3666 12 12.6666 12.3 12.6666 12.6667C12.6666 13.0333 12.3666 13.3333 12 13.3333H3.99998C3.63331 13.3333 3.33331 13.0333 3.33331 12.6667C3.33331 12.3 3.63331 12 3.99998 12ZM7.33998 9.26667C6.81998 9.78 5.97998 9.78 5.45998 9.26L3.99998 7.8C3.63331 7.43334 3.63998 6.84 4.01998 6.48667C4.37998 6.14 4.95331 6.15334 5.29998 6.5L6.39998 7.6L10.6866 3.31334C11.0466 2.95333 11.6266 2.95333 11.9866 3.31334L12.0133 3.34C12.3733 3.7 12.3733 4.28667 12.0066 4.64667L7.33998 9.26667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDownloadDone }

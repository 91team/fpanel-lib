import React, { FC } from 'react'

const IconFormatUnderlined: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.52665 11.3C10.5466 11.04 12 9.22667 12 7.19333V2.83333C12 2.37333 11.6266 2 11.1666 2C10.7066 2 10.3333 2.37333 10.3333 2.83333V7.26667C10.3333 8.38 9.57998 9.39333 8.48665 9.61333C6.98665 9.92667 5.66665 8.78 5.66665 7.33333V2.83333C5.66665 2.37333 5.29331 2 4.83331 2C4.37331 2 3.99998 2.37333 3.99998 2.83333V7.33333C3.99998 9.71333 6.08665 11.6133 8.52665 11.3ZM3.33331 13.3333C3.33331 13.7 3.63331 14 3.99998 14H12C12.3666 14 12.6666 13.7 12.6666 13.3333C12.6666 12.9667 12.3666 12.6667 12 12.6667H3.99998C3.63331 12.6667 3.33331 12.9667 3.33331 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatUnderlined }

import React, { FC } from 'react'

const IconFormatBold: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4 7.19332C11.0467 6.74666 11.5 6.01332 11.5 5.33332C11.5 3.82666 10.3333 2.66666 8.83334 2.66666H5.33334C4.96667 2.66666 4.66667 2.96666 4.66667 3.33332V11.3333C4.66667 11.7 4.96667 12 5.33334 12H9.18667C10.5667 12 11.8267 10.8733 11.8333 9.48666C11.84 8.46666 11.2667 7.59332 10.4 7.19332ZM6.66667 4.33332H8.66667C9.22001 4.33332 9.66667 4.77999 9.66667 5.33332C9.66667 5.88666 9.22001 6.33332 8.66667 6.33332H6.66667V4.33332ZM9 10.3333H6.66667V8.33332H9C9.55334 8.33332 10 8.77999 10 9.33332C10 9.88666 9.55334 10.3333 9 10.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatBold }

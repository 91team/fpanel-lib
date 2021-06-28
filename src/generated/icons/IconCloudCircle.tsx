import React, { FC } from 'react'

const IconCloudCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33333C4.32001 1.33333 1.33334 4.31999 1.33334 8C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.31999 11.68 1.33333 8.00001 1.33333ZM11 10.6667H5.33334C4.22668 10.6667 3.33334 9.77333 3.33334 8.66666C3.33334 7.56 4.22668 6.66666 5.33334 6.66666H5.42668C5.72001 5.51333 6.75334 4.66666 8.00001 4.66666C9.47334 4.66666 10.6667 5.85999 10.6667 7.33333H11C11.92 7.33333 12.6667 8.08 12.6667 9C12.6667 9.92 11.92 10.6667 11 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCloudCircle }

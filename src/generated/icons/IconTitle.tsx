import React, { FC } from 'react'

const IconTitle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33334 3.66667C3.33334 4.22001 3.78001 4.66667 4.33334 4.66667H7.00001V11.6667C7.00001 12.22 7.44668 12.6667 8.00001 12.6667C8.55334 12.6667 9.00001 12.22 9.00001 11.6667V4.66667H11.6667C12.22 4.66667 12.6667 4.22001 12.6667 3.66667C12.6667 3.11334 12.22 2.66667 11.6667 2.66667H4.33334C3.78001 2.66667 3.33334 3.11334 3.33334 3.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTitle }

import React, { FC } from 'react'

const IconEject: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99999 11.3334H12C12.3667 11.3334 12.6667 11.6334 12.6667 12C12.6667 12.3667 12.3667 12.6667 12 12.6667H3.99999C3.63333 12.6667 3.33333 12.3667 3.33333 12C3.33333 11.6334 3.63333 11.3334 3.99999 11.3334ZM7.44666 4.1667L4.24666 8.9667C3.94666 9.4067 4.26666 10 4.79999 10H11.2C11.7333 10 12.0533 9.4067 11.7533 8.9667L8.55333 4.1667C8.29333 3.7667 7.70666 3.7667 7.44666 4.1667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEject }

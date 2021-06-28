import React, { FC } from 'react'

const IconLastPage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.19334 5.40667L6.78667 8L4.19334 10.5933C3.93334 10.8533 3.93334 11.2733 4.19334 11.5333C4.45334 11.7933 4.87334 11.7933 5.13334 11.5333L8.19334 8.47333C8.45334 8.21333 8.45334 7.79333 8.19334 7.53333L5.13334 4.46667C4.87334 4.20667 4.45334 4.20667 4.19334 4.46667C3.94 4.72667 3.94 5.15333 4.19334 5.40667ZM11.3333 4C11.7 4 12 4.3 12 4.66667V11.3333C12 11.7 11.7 12 11.3333 12C10.9667 12 10.6667 11.7 10.6667 11.3333V4.66667C10.6667 4.3 10.9667 4 11.3333 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLastPage }

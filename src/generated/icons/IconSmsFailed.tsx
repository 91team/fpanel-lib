import React, { FC } from 'react'

const IconSmsFailed: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33337H2.66668C1.93334 1.33337 1.33334 1.93337 1.33334 2.66671V14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66671C14.6667 1.93337 14.0667 1.33337 13.3333 1.33337ZM8.66668 9.33337H7.33334V8.00004H8.66668V9.33337ZM8.00001 6.66671C7.63334 6.66671 7.33334 6.36671 7.33334 6.00004V4.66671C7.33334 4.30004 7.63334 4.00004 8.00001 4.00004C8.36668 4.00004 8.66668 4.30004 8.66668 4.66671V6.00004C8.66668 6.36671 8.36668 6.66671 8.00001 6.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSmsFailed }

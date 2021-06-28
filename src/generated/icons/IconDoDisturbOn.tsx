import React, { FC } from 'react'

const IconDoDisturbOn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337ZM10.6667 8.66671H5.33334C4.96668 8.66671 4.66668 8.36671 4.66668 8.00004C4.66668 7.63337 4.96668 7.33337 5.33334 7.33337H10.6667C11.0333 7.33337 11.3333 7.63337 11.3333 8.00004C11.3333 8.36671 11.0333 8.66671 10.6667 8.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDoDisturbOn }

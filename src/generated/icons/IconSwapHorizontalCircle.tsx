import React, { FC } from 'react'

const IconSwapHorizontalCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004ZM10 4.33337L12.1 6.43337C12.2333 6.56671 12.2333 6.77337 12.1 6.90671L10 9.00004V7.33337H7.33334V6.00004H10V4.33337ZM6.00001 11.6667L3.90001 9.56671C3.76668 9.43337 3.76668 9.22671 3.90001 9.09337L6.00001 7.00004V8.66671H8.66668V10H6.00001V11.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSwapHorizontalCircle }

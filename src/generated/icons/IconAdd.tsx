import React, { FC } from 'react'

const IconAdd: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.66671H8.66667V12C8.66667 12.3667 8.36667 12.6667 8 12.6667C7.63334 12.6667 7.33334 12.3667 7.33334 12V8.66671H4C3.63334 8.66671 3.33334 8.36671 3.33334 8.00004C3.33334 7.63337 3.63334 7.33337 4 7.33337H7.33334V4.00004C7.33334 3.63337 7.63334 3.33337 8 3.33337C8.36667 3.33337 8.66667 3.63337 8.66667 4.00004V7.33337H12C12.3667 7.33337 12.6667 7.63337 12.6667 8.00004C12.6667 8.36671 12.3667 8.66671 12 8.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAdd }

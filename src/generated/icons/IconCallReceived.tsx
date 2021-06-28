import React, { FC } from 'react'

const IconCallReceived: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8667 3.14001C12.6067 2.88001 12.1867 2.88001 11.9267 3.14001L4.66667 10.3933V6.66667C4.66667 6.30001 4.36667 6.00001 4 6.00001C3.63334 6.00001 3.33334 6.30001 3.33334 6.66667V12C3.33334 12.3667 3.63334 12.6667 4 12.6667H9.33334C9.7 12.6667 10 12.3667 10 12C10 11.6333 9.7 11.3333 9.33334 11.3333H5.60667L12.8667 4.07334C13.12 3.82001 13.12 3.39334 12.8667 3.14001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallReceived }

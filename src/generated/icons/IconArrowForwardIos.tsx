import React, { FC } from 'react'

const IconArrowForwardIos: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.92 14.0067C5.24667 14.3334 5.77334 14.3334 6.1 14.0067L11.64 8.4667C11.9 8.2067 11.9 7.7867 11.64 7.5267L6.1 1.9867C5.77334 1.66003 5.24667 1.66003 4.92 1.9867C4.59334 2.31337 4.59334 2.84003 4.92 3.1667L9.74667 8.00003L4.91334 12.8334C4.59334 13.1534 4.59334 13.6867 4.92 14.0067Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowForwardIos }

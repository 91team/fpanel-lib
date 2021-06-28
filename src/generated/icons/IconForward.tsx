import React, { FC } from 'react'

const IconForward: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 5.33335V4.27334C7.99999 3.68001 8.71999 3.38001 9.13999 3.80001L12.8667 7.52668C13.1267 7.78668 13.1267 8.20668 12.8667 8.46668L9.13999 12.1933C8.71999 12.6133 7.99999 12.32 7.99999 11.7267V10.6667H3.33332C2.96666 10.6667 2.66666 10.3667 2.66666 10V6.00001C2.66666 5.63335 2.96666 5.33335 3.33332 5.33335H7.99999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconForward }

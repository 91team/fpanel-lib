import React, { FC } from 'react'

const IconKeyboardHide: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2H2.66666C1.93333 2 1.33999 2.6 1.33999 3.33333L1.33333 10C1.33333 10.7333 1.93333 11.3333 2.66666 11.3333H13.3333C14.0667 11.3333 14.6667 10.7333 14.6667 10V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM7.33333 4H8.66666V5.33333H7.33333V4ZM7.33333 6H8.66666V7.33333H7.33333V6ZM5.33333 4H6.66666V5.33333H5.33333V4ZM5.33333 6H6.66666V7.33333H5.33333V6ZM4.66666 7.33333H3.33333V6H4.66666V7.33333ZM4.66666 5.33333H3.33333V4H4.66666V5.33333ZM10 10H6C5.63333 10 5.33333 9.7 5.33333 9.33333C5.33333 8.96667 5.63333 8.66667 6 8.66667H10C10.3667 8.66667 10.6667 8.96667 10.6667 9.33333C10.6667 9.7 10.3667 10 10 10ZM10.6667 7.33333H9.33333V6H10.6667V7.33333ZM10.6667 5.33333H9.33333V4H10.6667V5.33333ZM12.6667 7.33333H11.3333V6H12.6667V7.33333ZM12.6667 5.33333H11.3333V4H12.6667V5.33333ZM8.23333 15.1L10.0933 13.24C10.3 13.0333 10.1533 12.6733 9.85999 12.6733H6.14C5.83999 12.6733 5.69333 13.0333 5.90666 13.24L7.76666 15.1C7.89333 15.2267 8.10666 15.2267 8.23333 15.1Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardHide }

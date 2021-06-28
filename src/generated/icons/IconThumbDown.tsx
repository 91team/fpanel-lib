import React, { FC } from 'react'

const IconThumbDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25335 14.6267L10.94 10.9333C11.1867 10.6867 11.3267 10.3467 11.3267 9.99333V3.33333C11.3267 2.6 10.7267 2 9.99335 2H4.00001C3.46668 2 2.98668 2.32 2.78001 2.80667L0.606681 7.88C0.0400144 9.2 1.00668 10.6667 2.44001 10.6667H6.20668L5.57335 13.72C5.50668 14.0533 5.60668 14.3933 5.84668 14.6333C6.24002 15.02 6.86668 15.02 7.25335 14.6267ZM14 2C13.2667 2 12.6667 2.6 12.6667 3.33333V8.66667C12.6667 9.4 13.2667 10 14 10C14.7333 10 15.3333 9.4 15.3333 8.66667V3.33333C15.3333 2.6 14.7333 2 14 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconThumbDown }

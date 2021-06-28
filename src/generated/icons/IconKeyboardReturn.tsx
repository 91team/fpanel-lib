import React, { FC } from 'react'

const IconKeyboardReturn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 5.33332V7.33332H3.88666L5.80666 5.41332C6.06666 5.15332 6.06666 4.73332 5.80666 4.47332C5.54666 4.21332 5.12666 4.21332 4.86666 4.47332L1.80666 7.53332C1.54666 7.79332 1.54666 8.21332 1.80666 8.47332L4.86666 11.5333C5.12666 11.7933 5.54666 11.7933 5.80666 11.5333C6.06666 11.2733 6.06666 10.8533 5.80666 10.5933L3.88666 8.66665H13.3333C13.7 8.66665 14 8.36665 14 7.99999V5.33332C14 4.96665 13.7 4.66665 13.3333 4.66665C12.9667 4.66665 12.6667 4.96665 12.6667 5.33332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardReturn }

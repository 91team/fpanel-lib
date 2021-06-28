import React, { FC } from 'react'

const IconCheckBox: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM7.14 10.86C6.88 11.12 6.46 11.12 6.2 10.86L3.80667 8.46667C3.54667 8.20667 3.54667 7.78667 3.80667 7.52667C4.06667 7.26667 4.48667 7.26667 4.74667 7.52667L6.66667 9.44667L11.2533 4.86C11.5133 4.6 11.9333 4.6 12.1933 4.86C12.4533 5.12 12.4533 5.54 12.1933 5.8L7.14 10.86Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCheckBox }

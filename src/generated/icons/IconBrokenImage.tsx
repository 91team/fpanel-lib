import React, { FC } from 'react'

const IconBrokenImage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 3.33333V7.72667L12.4733 6.19333C12.2133 5.93333 11.7867 5.93333 11.5267 6.19333L9.33333 8.39333L7.14 6.2C6.88 5.94 6.46 5.94 6.2 6.2L4 8.39333L2 6.38667V3.33333C2 2.6 2.6 2 3.33333 2H12.6667C13.4 2 14 2.6 14 3.33333ZM12 7.61333L14 9.62V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.6 14 2 13.4 2 12.6667V8.28L3.52667 9.80667C3.78667 10.0667 4.20667 10.0667 4.46667 9.80667L6.66667 7.60667L8.86 9.8C9.12 10.06 9.54 10.06 9.8 9.8L12 7.61333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrokenImage }

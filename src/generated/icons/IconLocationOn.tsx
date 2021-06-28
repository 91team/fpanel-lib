import React, { FC } from 'react'

const IconLocationOn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33331C5.42 1.33331 3.33333 3.41998 3.33333 5.99998C3.33333 8.77998 6.27999 12.6133 7.49333 14.0733C7.75999 14.3933 8.24666 14.3933 8.51333 14.0733C9.72 12.6133 12.6667 8.77998 12.6667 5.99998C12.6667 3.41998 10.58 1.33331 8 1.33331ZM8 7.66665C7.07999 7.66665 6.33333 6.91998 6.33333 5.99998C6.33333 5.07998 7.07999 4.33331 8 4.33331C8.92 4.33331 9.66666 5.07998 9.66666 5.99998C9.66666 6.91998 8.92 7.66665 8 7.66665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocationOn }

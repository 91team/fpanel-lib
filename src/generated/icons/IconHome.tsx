import React, { FC } from 'react'

const IconHome: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 12.6666V9.33331H9.33334V12.6666C9.33334 13.0333 9.63334 13.3333 10 13.3333H12C12.3667 13.3333 12.6667 13.0333 12.6667 12.6666V7.99998H13.8C14.1067 7.99998 14.2533 7.61998 14.02 7.41998L8.44667 2.39998C8.19334 2.17331 7.80667 2.17331 7.55334 2.39998L1.98 7.41998C1.75334 7.61998 1.89334 7.99998 2.2 7.99998H3.33334V12.6666C3.33334 13.0333 3.63334 13.3333 4 13.3333H6C6.36667 13.3333 6.66667 13.0333 6.66667 12.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHome }

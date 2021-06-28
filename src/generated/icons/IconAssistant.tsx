import React, { FC } from 'react'

const IconAssistant: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 1.33331H3.33333C2.6 1.33331 2 1.93331 2 2.66665V12C2 12.7333 2.6 13.3333 3.33333 13.3333H6L7.52667 14.86C7.78667 15.12 8.20667 15.12 8.46667 14.86L10 13.3333H12.6667C13.4 13.3333 14 12.7333 14 12V2.66665C14 1.93331 13.4 1.33331 12.6667 1.33331ZM9.25333 8.58665L8 11.3333L6.74667 8.58665L4 7.33331L6.74667 6.07998L8 3.33331L9.25333 6.07998L12 7.33331L9.25333 8.58665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAssistant }

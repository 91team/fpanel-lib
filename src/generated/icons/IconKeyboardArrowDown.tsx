import React, { FC } from 'react'

const IconKeyboardArrowDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.41333 6.19332L8 8.77999L10.5867 6.19332C10.8467 5.93332 11.2667 5.93332 11.5267 6.19332C11.7867 6.45332 11.7867 6.87332 11.5267 7.13332L8.46667 10.1933C8.20667 10.4533 7.78667 10.4533 7.52667 10.1933L4.46667 7.13332C4.20667 6.87332 4.20667 6.45332 4.46667 6.19332C4.72667 5.93999 5.15333 5.93332 5.41333 6.19332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardArrowDown }

import React, { FC } from 'react'

const IconKeyboardArrowUp: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.41333 9.80666L8 7.22L10.5867 9.80666C10.8467 10.0667 11.2667 10.0667 11.5267 9.80666C11.7867 9.54666 11.7867 9.12666 11.5267 8.86666L8.46667 5.80666C8.20667 5.54666 7.78667 5.54666 7.52667 5.80666L4.46667 8.86666C4.20667 9.12666 4.20667 9.54666 4.46667 9.80666C4.72667 10.06 5.15333 10.0667 5.41333 9.80666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardArrowUp }

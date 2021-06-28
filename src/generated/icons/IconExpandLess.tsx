import React, { FC } from 'react'

const IconExpandLess: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52667 5.80669L4.46667 8.86669C4.20667 9.12669 4.20667 9.54669 4.46667 9.80669C4.72667 10.0667 5.14667 10.0667 5.40667 9.80669L8 7.22003L10.5867 9.80669C10.8467 10.0667 11.2667 10.0667 11.5267 9.80669C11.7867 9.54669 11.7867 9.12669 11.5267 8.86669L8.46667 5.80669C8.21333 5.54669 7.78667 5.54669 7.52667 5.80669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExpandLess }

import React, { FC } from 'react'

const IconFirstPage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8 10.5933L9.21333 8L11.8067 5.40667C12.0667 5.14667 12.0667 4.72667 11.8067 4.46667C11.5467 4.20667 11.1267 4.20667 10.8667 4.46667L7.80667 7.52667C7.54667 7.78667 7.54667 8.20667 7.80667 8.46667L10.8667 11.5267C11.1267 11.7867 11.5467 11.7867 11.8067 11.5267C12.06 11.2733 12.06 10.8467 11.8 10.5933ZM4.66667 4C5.03333 4 5.33333 4.3 5.33333 4.66667V11.3333C5.33333 11.7 5.03333 12 4.66667 12C4.3 12 4 11.7 4 11.3333V4.66667C4 4.3 4.3 4 4.66667 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFirstPage }

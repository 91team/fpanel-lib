import React, { FC } from 'react'

const IconFormatStrikethrough: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12.6667C8.73333 12.6667 9.33333 12.0667 9.33333 11.3333V10.6667H6.66667V11.3333C6.66667 12.0667 7.26667 12.6667 8 12.6667ZM3.33333 3.66666C3.33333 4.21999 3.78 4.66666 4.33333 4.66666H6.66667V6.66666H9.33333V4.66666H11.6667C12.22 4.66666 12.6667 4.21999 12.6667 3.66666C12.6667 3.11332 12.22 2.66666 11.6667 2.66666H4.33333C3.78 2.66666 3.33333 3.11332 3.33333 3.66666ZM2.66667 9.33332H13.3333C13.7 9.33332 14 9.03332 14 8.66666C14 8.29999 13.7 7.99999 13.3333 7.99999H2.66667C2.3 7.99999 2 8.29999 2 8.66666C2 9.03332 2.3 9.33332 2.66667 9.33332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatStrikethrough }

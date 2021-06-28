import React, { FC } from 'react'

const IconSms: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33337H2.66668C1.93334 1.33337 1.33334 1.93337 1.33334 2.66671V14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66671C14.6667 1.93337 14.0667 1.33337 13.3333 1.33337ZM6.00001 7.33337H4.66668V6.00004H6.00001V7.33337ZM8.66668 7.33337H7.33334V6.00004H8.66668V7.33337ZM11.3333 7.33337H10V6.00004H11.3333V7.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSms }

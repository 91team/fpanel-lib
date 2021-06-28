import React, { FC } from 'react'

const IconViewCompact: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 12.6667H6V8.00004H2V11.3334C2 12.0667 2.6 12.6667 3.33333 12.6667ZM6.66667 12.6667H13.3333C14.0667 12.6667 14.6667 12.0667 14.6667 11.3334V8.00004H6.66667V12.6667ZM2 4.66671V7.33337H14.6667V4.66671C14.6667 3.93337 14.0667 3.33337 13.3333 3.33337H3.33333C2.6 3.33337 2 3.93337 2 4.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconViewCompact }

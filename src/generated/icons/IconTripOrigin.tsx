import React, { FC } from 'react'

const IconTripOrigin: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33334 8.00004C1.33334 4.32004 4.32001 1.33337 8.00001 1.33337C11.68 1.33337 14.6667 4.32004 14.6667 8.00004C14.6667 11.68 11.68 14.6667 8.00001 14.6667C4.32001 14.6667 1.33334 11.68 1.33334 8.00004ZM8.00001 12C10.2067 12 12 10.2067 12 8.00004C12 5.79337 10.2067 4.00004 8.00001 4.00004C5.79334 4.00004 4.00001 5.79337 4.00001 8.00004C4.00001 10.2067 5.79334 12 8.00001 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTripOrigin }

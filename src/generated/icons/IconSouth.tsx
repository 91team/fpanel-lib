import React, { FC } from 'react'

const IconSouth: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2 9.52671C11.94 9.26671 11.52 9.26671 11.26 9.52671L8.66666 12.1134V2.00004C8.66666 1.63337 8.36666 1.33337 8 1.33337C7.63333 1.33337 7.33333 1.63337 7.33333 2.00004V12.12L4.74666 9.53337C4.48666 9.27337 4.06666 9.27337 3.80666 9.53337C3.54666 9.79337 3.54666 10.2134 3.80666 10.4734L7.53333 14.2C7.79333 14.46 8.21333 14.46 8.47333 14.2L12.2 10.4734C12.4533 10.2134 12.4533 9.78671 12.2 9.52671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSouth }

import React, { FC } from 'react'

const IconEqualizer: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13.3334C8.73334 13.3334 9.33334 12.7334 9.33334 12.0001V4.00008C9.33334 3.26675 8.73334 2.66675 8 2.66675C7.26667 2.66675 6.66667 3.26675 6.66667 4.00008V12.0001C6.66667 12.7334 7.26667 13.3334 8 13.3334ZM4.00001 13.3334C4.73334 13.3334 5.33334 12.7334 5.33334 12.0001V9.33341C5.33334 8.60008 4.73334 8.00008 4.00001 8.00008C3.26667 8.00008 2.66667 8.60008 2.66667 9.33341V12.0001C2.66667 12.7334 3.26667 13.3334 4.00001 13.3334ZM10.6667 7.33341V12.0001C10.6667 12.7334 11.2667 13.3334 12 13.3334C12.7333 13.3334 13.3333 12.7334 13.3333 12.0001V7.33341C13.3333 6.60008 12.7333 6.00008 12 6.00008C11.2667 6.00008 10.6667 6.60008 10.6667 7.33341Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEqualizer }

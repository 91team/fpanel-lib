import React, { FC } from 'react'

const IconFilterAlt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.83333 3.74008C4.38 5.72675 6.66666 8.66675 6.66666 8.66675V12.0001C6.66666 12.7334 7.26666 13.3334 8 13.3334C8.73333 13.3334 9.33333 12.7334 9.33333 12.0001V8.66675C9.33333 8.66675 11.62 5.72675 13.1667 3.74008C13.5067 3.30008 13.1933 2.66675 12.6333 2.66675H3.36C2.80666 2.66675 2.49333 3.30008 2.83333 3.74008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFilterAlt }

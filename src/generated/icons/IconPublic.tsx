import React, { FC } from 'react'

const IconPublic: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2C4.688 2 2 4.688 2 8C2 11.312 4.688 14 8 14C11.312 14 14 11.312 14 8C14 4.688 11.312 2 8 2ZM7.4 12.758C5.03 12.464 3.2 10.448 3.2 8C3.2 7.628 3.248 7.274 3.326 6.926L6.2 9.8V10.4C6.2 11.06 6.74 11.6 7.4 11.6V12.758ZM11.54 11.234C11.384 10.748 10.94 10.4 10.4 10.4H9.8V8.6C9.8 8.27 9.53 8 9.2 8H5.6V6.8H6.8C7.13 6.8 7.4 6.53 7.4 6.2V5H8.6C9.26 5 9.8 4.46 9.8 3.8V3.554C11.558 4.268 12.8 5.99 12.8 8C12.8 9.248 12.32 10.382 11.54 11.234Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPublic }

import React, { FC } from 'react'

const IconGraphicEq: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 12C5.7 12 6 11.7 6 11.3334V4.66671C6 4.30004 5.7 4.00004 5.33333 4.00004C4.96667 4.00004 4.66667 4.30004 4.66667 4.66671V11.3334C4.66667 11.7 4.96667 12 5.33333 12ZM8 14.6667C8.36667 14.6667 8.66667 14.3667 8.66667 14V2.00004C8.66667 1.63337 8.36667 1.33337 8 1.33337C7.63333 1.33337 7.33333 1.63337 7.33333 2.00004V14C7.33333 14.3667 7.63333 14.6667 8 14.6667ZM2.66667 9.33337C3.03333 9.33337 3.33333 9.03337 3.33333 8.66671V7.33337C3.33333 6.96671 3.03333 6.66671 2.66667 6.66671C2.3 6.66671 2 6.96671 2 7.33337V8.66671C2 9.03337 2.3 9.33337 2.66667 9.33337ZM10.6667 12C11.0333 12 11.3333 11.7 11.3333 11.3334V4.66671C11.3333 4.30004 11.0333 4.00004 10.6667 4.00004C10.3 4.00004 10 4.30004 10 4.66671V11.3334C10 11.7 10.3 12 10.6667 12ZM12.6667 7.33337V8.66671C12.6667 9.03337 12.9667 9.33337 13.3333 9.33337C13.7 9.33337 14 9.03337 14 8.66671V7.33337C14 6.96671 13.7 6.66671 13.3333 6.66671C12.9667 6.66671 12.6667 6.96671 12.6667 7.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGraphicEq }

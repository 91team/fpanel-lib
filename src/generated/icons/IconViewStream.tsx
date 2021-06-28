import React, { FC } from 'react'

const IconViewStream: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33332 12H13.3333C13.7 12 14 11.7 14 11.3334V8.66671C14 8.30004 13.7 8.00004 13.3333 8.00004H3.33332C2.96666 8.00004 2.66666 8.30004 2.66666 8.66671V11.3334C2.66666 11.7 2.96666 12 3.33332 12ZM2.66666 4.00004V6.66671C2.66666 7.03337 2.96666 7.33337 3.33332 7.33337H13.3333C13.7 7.33337 14 7.03337 14 6.66671V4.00004C14 3.63337 13.7 3.33337 13.3333 3.33337H3.33332C2.96666 3.33337 2.66666 3.63337 2.66666 4.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconViewStream }

import React, { FC } from 'react'

const IconCallToAction: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2.00002C1.26669 2 0.666687 2.6 0.666687 3.33333V12.6667C0.666687 13.4 1.26669 14 2.00002 14H14C14.7334 14 15.3334 13.4 15.3334 12.6667V3.33333C15.3334 2.6 14.7334 2 14 2ZM13.3334 12.6667H2.66669C2.30002 12.6667 2.00002 12.3667 2.00002 12V11.3333C2.00002 10.9667 2.30002 10.6667 2.66669 10.6667H13.3334C13.7 10.6667 14 10.9667 14 11.3333V12C14 12.3667 13.7 12.6667 13.3334 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallToAction }

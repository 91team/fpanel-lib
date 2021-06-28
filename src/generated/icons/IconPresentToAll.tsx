import React, { FC } from 'react'

const IconPresentToAll: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H2C1.26 2 0.666664 2.59333 0.666664 3.33333V12.6667C0.666664 13.4067 1.26 14 2 14H14C14.74 14 15.3333 13.4067 15.3333 12.6667V3.33333C15.3333 2.59333 14.74 2 14 2ZM13.3333 12.68H2.66666C2.3 12.68 2 12.38 2 12.0133V3.98667C2 3.62 2.3 3.32 2.66666 3.32H13.3333C13.7 3.32 14 3.62 14 3.98667V12.0133C14 12.38 13.7 12.68 13.3333 12.68ZM6.66666 8H5.33333L7.76666 5.56667C7.9 5.43333 8.10666 5.43333 8.24 5.56667L10.6667 8H9.33333V10.6667H6.66666V8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPresentToAll }

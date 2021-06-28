import React, { FC } from 'react'

const IconSettingsSystemDaydream: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00002 10.6667H10.3334C11.2534 10.6667 12 9.92 12 9C12 8.08 11.2534 7.33333 10.3334 7.33333H10.3C10.14 6.20667 9.17335 5.33333 8.00002 5.33333C7.06669 5.33333 6.26669 5.88667 5.89335 6.68H5.78669C4.78002 6.78667 4.00002 7.63333 4.00002 8.66667C4.00002 9.77333 4.89335 10.6667 6.00002 10.6667ZM14 2H2.00002C1.26669 2 0.666687 2.6 0.666687 3.33333V12.6667C0.666687 13.4 1.26669 14 2.00002 14H14C14.7334 14 15.3334 13.4 15.3334 12.6667V3.33333C15.3334 2.6 14.7334 2 14 2ZM13.3334 12.6733H2.66669C2.30002 12.6733 2.00002 12.3733 2.00002 12.0067V3.99333C2.00002 3.62667 2.30002 3.32667 2.66669 3.32667H13.3334C13.7 3.32667 14 3.62667 14 3.99333V12.0067C14 12.3733 13.7 12.6733 13.3334 12.6733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSettingsSystemDaydream }

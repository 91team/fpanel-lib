import React, { FC } from 'react'

const IconPhoneAndroid: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 0.666656H5.33334C4.22668 0.666656 3.33334 1.55999 3.33334 2.66666V13.3333C3.33334 14.44 4.22668 15.3333 5.33334 15.3333H10.6667C11.7733 15.3333 12.6667 14.44 12.6667 13.3333V2.66666C12.6667 1.55999 11.7733 0.666656 10.6667 0.666656ZM9.00001 14H7.00001C6.81334 14 6.66668 13.8533 6.66668 13.6667C6.66668 13.48 6.81334 13.3333 7.00001 13.3333H9.00001C9.18668 13.3333 9.33334 13.48 9.33334 13.6667C9.33334 13.8533 9.18668 14 9.00001 14ZM11.3333 12H4.66668V2.66666H11.3333V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhoneAndroid }

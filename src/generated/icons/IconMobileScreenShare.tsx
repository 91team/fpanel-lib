import React, { FC } from 'react'

const IconMobileScreenShare: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 0.666687H4.66666C3.93333 0.666687 3.34 1.26669 3.34 2.00002V14C3.34 14.7334 3.93333 15.3334 4.66666 15.3334H11.3333C12.0667 15.3334 12.6667 14.7334 12.6667 14V2.00002C12.6667 1.26669 12.0667 0.666687 11.3333 0.666687ZM11.3333 12.6667H4.66666V3.33335H11.3333V12.6667ZM8.53333 8.81335V9.98002L10.4067 8.23335C10.5467 8.10002 10.5467 7.88002 10.4067 7.74669L8.53333 6.00002V7.13335C6.46 7.42002 5.63333 8.84002 5.33333 10.2667C6.07333 9.26669 7.05333 8.81335 8.53333 8.81335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMobileScreenShare }

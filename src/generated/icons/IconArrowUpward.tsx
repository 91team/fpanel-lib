import React, { FC } from 'react'

const IconArrowUpward: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66669 12.6666V5.21995L11.92 8.47328C12.18 8.73328 12.6067 8.73328 12.8667 8.47328C13.1267 8.21328 13.1267 7.79328 12.8667 7.53328L8.47335 3.13995C8.21336 2.87995 7.79336 2.87995 7.53336 3.13995L3.13335 7.52661C2.87335 7.78661 2.87335 8.20661 3.13335 8.46661C3.39335 8.72661 3.81335 8.72661 4.07335 8.46661L7.33335 5.21995V12.6666C7.33335 13.0333 7.63336 13.3333 8.00002 13.3333C8.36669 13.3333 8.66669 13.0333 8.66669 12.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowUpward }

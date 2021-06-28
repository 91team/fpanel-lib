import React, { FC } from 'react'

const IconAirlineSeatLegroomNormal: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 8V2.66667C3.33333 2.3 3.03333 2 2.66667 2C2.3 2 2 2.3 2 2.66667V8C2 9.84 3.49333 11.3333 5.33333 11.3333H8.66667C9.03333 11.3333 9.33333 11.0333 9.33333 10.6667C9.33333 10.3 9.03333 10 8.66667 10H5.33333C4.22667 10 3.33333 9.10667 3.33333 8ZM13.6667 12H12.6667V7.33333C12.6667 6.6 12.0667 6 11.3333 6H8V2H4V7.33333C4 8.43333 4.9 9.33333 6 9.33333H10.6667V12.6667C10.6667 13.4 11.2667 14 12 14H13.6667C14.22 14 14.6667 13.5533 14.6667 13C14.6667 12.4467 14.22 12 13.6667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAirlineSeatLegroomNormal }

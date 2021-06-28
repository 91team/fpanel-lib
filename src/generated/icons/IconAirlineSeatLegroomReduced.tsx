import React, { FC } from 'react'

const IconAirlineSeatLegroomReduced: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3133 12.8C13.4333 13.44 12.9467 14 12.3333 14H10.54C9.67333 14 9.03333 13.1867 9.24667 12.34L10 9.33333H6C4.9 9.33333 4 8.43333 4 7.33333V2H8V6H11.3333C12.0667 6 12.6667 6.6 12.6667 7.33333L11.3333 12H12.2933C12.78 12 13.22 12.3267 13.3133 12.8ZM3.33333 8V2.66667C3.33333 2.3 3.03333 2 2.66667 2C2.3 2 2 2.3 2 2.66667V8C2 9.84 3.49333 11.3333 5.33333 11.3333H7.33333C7.7 11.3333 8 11.0333 8 10.6667C8 10.3 7.7 10 7.33333 10H5.33333C4.22667 10 3.33333 9.10667 3.33333 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAirlineSeatLegroomReduced }

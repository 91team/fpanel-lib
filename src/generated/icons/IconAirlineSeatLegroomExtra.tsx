import React, { FC } from 'react'

const IconAirlineSeatLegroomExtra: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66668 8V2.66667C2.66668 2.3 2.36668 2 2.00001 2C1.63334 2 1.33334 2.3 1.33334 2.66667V8C1.33334 9.84 2.82668 11.3333 4.66668 11.3333H8.00001C8.36668 11.3333 8.66668 11.0333 8.66668 10.6667C8.66668 10.3 8.36668 10 8.00001 10H4.66668C3.56001 10 2.66668 9.10667 2.66668 8ZM15.22 11.4933C14.9667 11.0133 14.36 10.8467 13.8667 11.0733L13.14 11.4067L10.8667 6.75333C10.64 6.3 10.18 6 9.67334 6H7.33334V2H3.33334V7.33333C3.33334 8.44 4.22668 9.33333 5.33334 9.33333H10L11.7067 12.8333C12.0267 13.4867 12.8 13.76 13.46 13.46L14.76 12.8667C15.2667 12.6267 15.4867 12 15.22 11.4933Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAirlineSeatLegroomExtra }

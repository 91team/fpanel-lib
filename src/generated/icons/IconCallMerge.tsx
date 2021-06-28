import React, { FC } from 'react'

const IconCallMerge: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8 13.1333C12.06 12.8733 12.06 12.4533 11.8 12.1933L9.99999 10.3933L9.05999 11.3333L10.86 13.1333C11.12 13.3933 11.5467 13.3933 11.8 13.1333ZM5.80665 5.33333H7.33332V9.05999L4.19332 12.1933C3.93332 12.4533 3.93332 12.8733 4.19332 13.1333C4.45332 13.3933 4.87332 13.3933 5.13332 13.1333L8.66665 9.59999V5.33333H10.1933C10.4933 5.33333 10.64 4.97333 10.4267 4.76666L8.23332 2.57333C8.09999 2.43999 7.89332 2.43999 7.75999 2.57333L5.56666 4.76666C5.35999 4.97333 5.50665 5.33333 5.80665 5.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallMerge }

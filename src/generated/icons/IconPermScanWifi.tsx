import React, { FC } from 'react'

const IconPermScanWifi: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 2C4.94001 2 2.57334 3.02 0.59334 4.39333C0.266674 4.61333 0.200007 5.06 0.446674 5.36667L6.96667 13.3933C7.50001 14.0467 8.50001 14.0533 9.03334 13.3933L15.5533 5.38C15.8 5.07333 15.7333 4.62667 15.4067 4.40667C13.4267 3.02667 11.06 2 8.00001 2ZM8.00001 10.6667C7.63334 10.6667 7.33334 10.3667 7.33334 10V7.33333C7.33334 6.96667 7.63334 6.66667 8.00001 6.66667C8.36667 6.66667 8.66667 6.96667 8.66667 7.33333V10C8.66667 10.3667 8.36667 10.6667 8.00001 10.6667ZM7.33334 5.33333V4H8.66667V5.33333H7.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPermScanWifi }

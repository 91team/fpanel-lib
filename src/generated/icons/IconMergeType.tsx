import React, { FC } from 'react'

const IconMergeType: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8 13.1333C12.06 12.8733 12.06 12.4533 11.8 12.1933L10 10.3933L9.06 11.3333L10.86 13.1333C11.12 13.3933 11.5467 13.3933 11.8 13.1333ZM5.80667 5.33333H7.33334V9.05999L4.19334 12.1933C3.93334 12.4533 3.93334 12.8733 4.19334 13.1333C4.45334 13.3933 4.87334 13.3933 5.13334 13.1333L8.27334 9.99999C8.52667 9.74666 8.66667 9.41333 8.66667 9.05999V5.33333H10.1933C10.4933 5.33333 10.64 4.97333 10.4267 4.76666L8.23334 2.57333C8.1 2.43999 7.89334 2.43999 7.76 2.57333L5.56667 4.76666C5.36 4.97333 5.50667 5.33333 5.80667 5.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMergeType }

import React, { FC } from 'react'

const IconBrightnessHigh: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 5.79334V4.00001C13.3333 3.26668 12.7333 2.66668 12 2.66668H10.2067L8.94001 1.40001C8.42001 0.88001 7.57334 0.88001 7.05334 1.40001L5.79334 2.66668H4.00001C3.26668 2.66668 2.66668 3.26668 2.66668 4.00001V5.79334L1.40001 7.06001C0.88001 7.58001 0.88001 8.42668 1.40001 8.94668L2.66668 10.2133V12C2.66668 12.7333 3.26668 13.3333 4.00001 13.3333H5.79334L7.06001 14.6C7.58001 15.12 8.42668 15.12 8.94668 14.6L10.2133 13.3333H12C12.7333 13.3333 13.3333 12.7333 13.3333 12V10.2067L14.6 8.94001C15.12 8.42001 15.12 7.57334 14.6 7.05334L13.3333 5.79334ZM8.00001 12C5.79334 12 4.00001 10.2067 4.00001 8.00001C4.00001 5.79334 5.79334 4.00001 8.00001 4.00001C10.2067 4.00001 12 5.79334 12 8.00001C12 10.2067 10.2067 12 8.00001 12ZM8.00001 5.33334C6.52668 5.33334 5.33334 6.52668 5.33334 8.00001C5.33334 9.47334 6.52668 10.6667 8.00001 10.6667C9.47334 10.6667 10.6667 9.47334 10.6667 8.00001C10.6667 6.52668 9.47334 5.33334 8.00001 5.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrightnessHigh }

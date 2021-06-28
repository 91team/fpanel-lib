import React, { FC } from 'react'

const IconOfflineBolt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.34668C4.32668 1.34668 1.34668 4.32668 1.34668 8.00001C1.34668 11.6733 4.32668 14.6533 8.00001 14.6533C11.6733 14.6533 14.6533 11.6733 14.6533 8.00001C14.6533 4.32668 11.6733 1.34668 8.00001 1.34668ZM7.65335 11.92V9.16001H5.88001C5.63335 9.16001 5.46668 8.89335 5.58668 8.67335L8.04001 3.89335C8.19335 3.58001 8.66668 3.69335 8.66668 4.04668V6.84001H10.36C10.6067 6.84001 10.7667 7.10001 10.66 7.32001L8.28668 12.0667C8.12668 12.3867 7.65335 12.2733 7.65335 11.92Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconOfflineBolt }

import React, { FC } from 'react'

const IconStopScreenShare: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3333 12H14.5333L15.7267 13.1933C15.8867 13.0733 16 12.8867 16 12.6667C16 12.3 15.7 12 15.3333 12ZM2.15333 1.52001C1.89333 1.26001 1.46667 1.26001 1.20667 1.52001C0.946667 1.78001 0.946667 2.20001 1.20667 2.46001L1.76667 3.03335C1.76667 3.03335 1.32667 3.41335 1.32667 4.01335C1.33333 4.61335 1.33333 10.6667 1.33333 10.6667L1.34 10.6733C1.34 11.4 1.92667 11.9933 2.65333 12H0.666667C0.3 12 0 12.3 0 12.6667C0 13.0333 0.3 13.3333 0.666667 13.3333H12.0867L13.42 14.6667C13.68 14.9267 14.1 14.9267 14.36 14.6667C14.62 14.4067 14.62 13.9867 14.36 13.7267L2.15333 1.52001ZM4.66667 10C4.87333 9.01335 5.29333 8.04668 6.05333 7.30001L7.11333 8.36001C6.08667 8.61335 5.30667 9.14001 4.66667 10ZM8.66667 6.08668V5.43335C8.66667 5.14001 9.01333 4.99335 9.22667 5.18668L10 5.91335L11.0733 6.91335C11.2133 7.04668 11.2133 7.26668 11.0733 7.40001L10.48 7.95335L14.2 11.6733C14.4867 11.4267 14.6667 11.0733 14.6667 10.6667V4.00001C14.6667 3.27335 14.0733 2.68001 13.3467 2.68001H5.2L8.62667 6.10001C8.64 6.09335 8.65333 6.08668 8.66667 6.08668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStopScreenShare }

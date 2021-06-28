import React, { FC } from 'react'

const IconSignalWifiOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.76 4.66669C15.46 4.44002 12.4733 2.00002 7.99999 2.00002C7.11999 2.00002 6.29999 2.09335 5.53999 2.25335L12.2867 9.00002L15.76 4.66669ZM2.74666 1.34002C2.48666 1.08002 2.06666 1.08002 1.80666 1.34002C1.54666 1.60002 1.54666 2.02002 1.80666 2.28002L2.70666 3.18002C1.27332 3.84002 0.393324 4.54669 0.23999 4.66669L6.95999 13.04C7.49332 13.7067 8.50666 13.7067 9.03999 13.04L10.6067 11.0867L12.3467 12.8267C12.6067 13.0867 13.0267 13.0867 13.2867 12.8267C13.5467 12.5667 13.5467 12.1467 13.2867 11.8867L2.74666 1.34002Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalWifiOff }

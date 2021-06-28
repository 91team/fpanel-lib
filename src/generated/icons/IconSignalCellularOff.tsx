import React, { FC } from 'react'

const IconSignalCellularOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2.27334C14 1.68001 13.28 1.38001 12.86 1.80001L8.45999 6.20001L14 11.74V2.27334ZM14.2933 13.92L3.74666 3.37334C3.48666 3.11334 3.06666 3.11334 2.80666 3.37334C2.54666 3.63334 2.54666 4.05334 2.80666 4.31334L6.57999 8.08668L1.80666 12.86C1.38666 13.28 1.67999 14 2.27333 14H12.4867L13.3467 14.86C13.6067 15.12 14.0267 15.12 14.2867 14.86C14.5533 14.6 14.5533 14.18 14.2933 13.92Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellularOff }

import React, { FC } from 'react'

const IconSignalCellularNoSim: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 3.33333C12.6667 2.6 12.0667 2 11.3333 2H7.21999C6.86666 2 6.52666 2.14 6.27332 2.39333L5.29999 3.37333L12.6667 10.74V3.33333ZM2.05999 2.96C1.79999 3.22 1.79999 3.64 2.05999 3.9L3.33332 5.18667V12.6667C3.33332 13.4067 3.93332 14 4.66666 14H12.1533L12.76 14.6067C13.02 14.8667 13.44 14.8667 13.7 14.6067C13.96 14.3467 13.96 13.9267 13.7 13.6667L2.99999 2.96C2.73999 2.7 2.31999 2.7 2.05999 2.96Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellularNoSim }

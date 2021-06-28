import React, { FC } from 'react'

const IconSignalCellularNull: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4.55329V12.6666C13.3333 13.0333 13.0333 13.3333 12.6667 13.3333H4.55335L13.3333 4.55329ZM13.5267 2.47329L2.47335 13.5266C2.05335 13.9466 2.34668 14.6666 2.94001 14.6666H13.3333C14.0667 14.6666 14.6667 14.0666 14.6667 13.3333V2.93995C14.6667 2.34662 13.9467 2.05329 13.5267 2.47329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellularNull }

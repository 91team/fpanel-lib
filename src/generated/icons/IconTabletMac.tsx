import React, { FC } from 'react'

const IconTabletMac: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 0H3.00001C2.08001 0 1.33334 0.746667 1.33334 1.66667V14.3333C1.33334 15.2533 2.08001 16 3.00001 16H12.3333C13.2533 16 14 15.2533 14 14.3333V1.66667C14 0.746667 13.2533 0 12.3333 0ZM7.66668 15.3333C7.11334 15.3333 6.66668 14.8867 6.66668 14.3333C6.66668 13.78 7.11334 13.3333 7.66668 13.3333C8.22001 13.3333 8.66668 13.78 8.66668 14.3333C8.66668 14.8867 8.22001 15.3333 7.66668 15.3333ZM12.6667 12.6667H2.66668V2H12.6667V12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTabletMac }

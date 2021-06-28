import React, { FC } from 'react'

const IconCarpenter: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1533 9.48665L5.13997 1.47332C4.87997 1.21332 4.45997 1.21332 4.19997 1.47332L2.46664 3.19999C2.23997 3.42665 2.20664 3.78665 2.39331 4.05332L7.49331 11.3733C6.97331 11.8933 6.97331 12.74 7.49331 13.26L8.43331 14.2C8.95331 14.72 9.79997 14.72 10.32 14.2L13.1466 11.3733C13.6733 10.8533 13.6733 10.0067 13.1533 9.48665ZM9.37997 13.2533L8.43997 12.3133L11.2666 9.48665L12.2066 10.4267L9.37997 13.2533Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCarpenter }

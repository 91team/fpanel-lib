import React, { FC } from 'react'

const IconVolumeMute: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66666 6.66668V9.33334C4.66666 9.70001 4.96666 10 5.33332 10H7.33332L9.52666 12.1933C9.94666 12.6133 10.6667 12.3133 10.6667 11.72V4.27334C10.6667 3.68001 9.94666 3.38001 9.52666 3.80001L7.33332 6.00001H5.33332C4.96666 6.00001 4.66666 6.30001 4.66666 6.66668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVolumeMute }

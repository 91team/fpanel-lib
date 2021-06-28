import React, { FC } from 'react'

const IconVolumeDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 8.00001C12.3333 6.82001 11.6533 5.80668 10.6667 5.31334V10.68C11.6533 10.1933 12.3333 9.18001 12.3333 8.00001ZM3.33334 6.66668V9.33334C3.33334 9.70001 3.63334 10 4.00001 10H6.00001L8.19334 12.1933C8.61334 12.6133 9.33334 12.3133 9.33334 11.72V4.27334C9.33334 3.68001 8.61334 3.38001 8.19334 3.80001L6.00001 6.00001H4.00001C3.63334 6.00001 3.33334 6.30001 3.33334 6.66668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVolumeDown }

import React, { FC } from 'react'

const IconPanoramaFishEye: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33337C4.31334 1.33337 1.33334 4.31337 1.33334 8.00004C1.33334 11.6867 4.31334 14.6667 8.00001 14.6667C11.6867 14.6667 14.6667 11.6867 14.6667 8.00004C14.6667 4.31337 11.6867 1.33337 8.00001 1.33337ZM8.00001 13.3334C5.06001 13.3334 2.66668 10.94 2.66668 8.00004C2.66668 5.06004 5.06001 2.66671 8.00001 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 8.00001 13.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPanoramaFishEye }

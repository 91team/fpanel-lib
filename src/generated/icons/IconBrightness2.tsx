import React, { FC } from 'react'

const IconBrightness2: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.28666 1.53334C6.69999 1.14001 5.16666 1.35334 3.86666 1.96001C3.63332 2.06667 3.59332 2.38667 3.79999 2.53334C5.53332 3.73334 6.66666 5.73334 6.66666 8.00001C6.66666 10.2667 5.53332 12.2667 3.79999 13.4667C3.58666 13.6133 3.62666 13.9333 3.85999 14.04C4.71332 14.44 5.66666 14.6667 6.66666 14.6667C10.7 14.6667 13.9 11.08 13.2467 6.93334C12.84 4.32001 10.8533 2.16001 8.28666 1.53334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrightness2 }

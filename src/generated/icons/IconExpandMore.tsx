import React, { FC } from 'react'

const IconExpandMore: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5867 6.19329L7.99999 8.77996L5.41332 6.19329C5.15332 5.93329 4.73332 5.93329 4.47332 6.19329C4.21332 6.45329 4.21332 6.87329 4.47332 7.13329L7.53332 10.1933C7.79332 10.4533 8.21332 10.4533 8.47332 10.1933L11.5333 7.13329C11.7933 6.87329 11.7933 6.45329 11.5333 6.19329C11.2733 5.93996 10.8467 5.93329 10.5867 6.19329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExpandMore }

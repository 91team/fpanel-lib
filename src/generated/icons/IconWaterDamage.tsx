import React, { FC } from 'react'

const IconWaterDamage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55334 2.39998L1.98 7.41998C1.75334 7.61998 1.89334 7.99998 2.2 7.99998H3.33334V12.6666C3.33334 13.0333 3.63334 13.3333 4 13.3333H12C12.3667 13.3333 12.6667 13.0333 12.6667 12.6666V7.99998H13.8C14.1067 7.99998 14.2533 7.61998 14.02 7.41998L8.44667 2.39998C8.19334 2.17331 7.80667 2.17331 7.55334 2.39998ZM8 10.6666C7.26667 10.6666 6.66667 10.0666 6.66667 9.33331C6.66667 8.81331 7.32667 7.70665 7.72 7.09331C7.85334 6.88665 8.14667 6.88665 8.28 7.09331C8.67334 7.70665 9.33334 8.81331 9.33334 9.33331C9.33334 10.0666 8.73334 10.6666 8 10.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWaterDamage }

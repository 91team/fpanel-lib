import React, { FC } from 'react'

const IconExposureNeg1: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66666 7.99998C2.66666 8.36665 2.96666 8.66665 3.33332 8.66665H7.33332C7.69999 8.66665 7.99999 8.36665 7.99999 7.99998C7.99999 7.63331 7.69999 7.33331 7.33332 7.33331H3.33332C2.96666 7.33331 2.66666 7.63331 2.66666 7.99998ZM12.6667 12H11.3333V4.91998L9.33332 5.59998V4.46665L12.4667 3.33331H12.6667V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExposureNeg1 }

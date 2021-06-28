import React, { FC } from 'react'

const IconRateReview: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33337H2.66665C1.93331 1.33337 1.33331 1.93337 1.33331 2.66671V14.6667L3.99998 12H13.3333C14.0666 12 14.6666 11.4 14.6666 10.6667V2.66671C14.6666 1.93337 14.0666 1.33337 13.3333 1.33337ZM3.99998 9.33337V7.68671L8.58665 3.10004C8.71998 2.96671 8.92665 2.96671 9.05998 3.10004L10.24 4.28004C10.3733 4.41337 10.3733 4.62004 10.24 4.75337L5.64665 9.33337H3.99998ZM11.3333 9.33337H6.99998L8.33331 8.00004H11.3333C11.7 8.00004 12 8.30004 12 8.66671C12 9.03337 11.7 9.33337 11.3333 9.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRateReview }

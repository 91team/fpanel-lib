import React, { FC } from 'react'

const IconReportProblem: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.81999 14H14.1733C14.6867 14 15.0067 13.4466 14.7533 13L8.57333 2.33329C8.31333 1.88662 7.67333 1.88662 7.41999 2.33329L1.23999 13C0.986661 13.4466 1.30666 14 1.81999 14ZM8.66666 12H7.33333V10.6666H8.66666V12ZM7.99999 9.33329C7.63333 9.33329 7.33333 9.03329 7.33333 8.66662V7.33329C7.33333 6.96662 7.63333 6.66662 7.99999 6.66662C8.36666 6.66662 8.66666 6.96662 8.66666 7.33329V8.66662C8.66666 9.03329 8.36666 9.33329 7.99999 9.33329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconReportProblem }

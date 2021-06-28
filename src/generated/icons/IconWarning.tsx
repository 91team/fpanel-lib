import React, { FC } from 'react'

const IconWarning: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.98 14H13.02C14.0467 14 14.6867 12.8866 14.1733 12L9.15333 3.32662C8.64 2.43995 7.36 2.43995 6.84667 3.32662L1.82667 12C1.31333 12.8866 1.95333 14 2.98 14ZM8 9.33329C7.63333 9.33329 7.33333 9.03329 7.33333 8.66662V7.33329C7.33333 6.96662 7.63333 6.66662 8 6.66662C8.36667 6.66662 8.66667 6.96662 8.66667 7.33329V8.66662C8.66667 9.03329 8.36667 9.33329 8 9.33329ZM8.66667 12H7.33333V10.6666H8.66667V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWarning }

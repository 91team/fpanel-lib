import React, { FC } from 'react'

const IconStar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 11.5133L10.7667 13.1866C11.2733 13.4933 11.8933 13.0399 11.76 12.4666L11.0267 9.31992L13.4733 7.19993C13.92 6.81326 13.68 6.07993 13.0933 6.03326L9.87332 5.75993L8.61332 2.78659C8.38665 2.24659 7.61332 2.24659 7.38665 2.78659L6.12665 5.75326L2.90665 6.02659C2.31999 6.07326 2.07999 6.80659 2.52665 7.19326L4.97332 9.31326L4.23999 12.4599C4.10665 13.0333 4.72665 13.4866 5.23332 13.1799L7.99999 11.5133Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStar }

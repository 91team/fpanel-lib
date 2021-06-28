import React, { FC } from 'react'

const IconCallMade: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99999 3.99998C5.99999 4.37331 6.29999 4.66665 6.66666 4.66665H10.3933L3.13332 11.9266C2.87332 12.1866 2.87332 12.6066 3.13332 12.8666C3.39332 13.1266 3.81332 13.1266 4.07332 12.8666L11.3333 5.60665V9.33331C11.3333 9.69998 11.6333 9.99998 12 9.99998C12.3667 9.99998 12.6667 9.69998 12.6667 9.33331V3.99998C12.6667 3.63331 12.3667 3.33331 12 3.33331H6.66666C6.29999 3.33331 5.99999 3.63331 5.99999 3.99998Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallMade }

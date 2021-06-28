import React, { FC } from 'react'

const IconNorthEast: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99999 4.00004C5.99999 4.37337 6.29999 4.66671 6.66666 4.66671H10.3933L3.13332 11.9267C2.87332 12.1867 2.87332 12.6067 3.13332 12.8667C3.39332 13.1267 3.81332 13.1267 4.07332 12.8667L11.3333 5.60671V9.33337C11.3333 9.70004 11.6333 10 12 10C12.3667 10 12.6667 9.70004 12.6667 9.33337V4.00004C12.6667 3.63337 12.3667 3.33337 12 3.33337H6.66666C6.29999 3.33337 5.99999 3.63337 5.99999 4.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNorthEast }

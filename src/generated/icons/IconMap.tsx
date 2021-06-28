import React, { FC } from 'react'

const IconMap: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.76667 3.32004L6.43333 2.15337C6.15333 2.05337 5.84667 2.05337 5.56667 2.1467L2.90667 3.04004C2.36667 3.2267 2 3.73337 2 4.3067V12.2067C2 13.1467 2.94 13.7867 3.81333 13.4467L5.76667 12.6867C5.91333 12.6267 6.08 12.6267 6.22667 12.68L9.56 13.8467C9.84 13.9467 10.1467 13.9467 10.4267 13.8534L13.0867 12.96C13.6267 12.78 13.9933 12.2667 13.9933 11.6934V3.79337C13.9933 2.85337 13.0533 2.21337 12.18 2.55337L10.2267 3.31337C10.08 3.3667 9.92 3.37337 9.76667 3.32004ZM10 12.5934L6 11.1867V3.4067L10 4.81337V12.5934Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMap }

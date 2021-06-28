import React, { FC } from 'react'

const IconStreetview: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37333 9.55337C8.14667 9.73337 8 10.02 8 10.3334V14H12.6667C13.4 14 14 13.4 14 12.6667V8.68004C13.3733 8.46004 12.7 8.33337 12 8.33337C10.6467 8.33337 9.38 8.80004 8.37333 9.55337Z" fill="currentColor"/>
<path d="M12 7.33329C13.8409 7.33329 15.3333 5.84091 15.3333 3.99996C15.3333 2.15901 13.8409 0.666626 12 0.666626C10.159 0.666626 8.66666 2.15901 8.66666 3.99996C8.66666 5.84091 10.159 7.33329 12 7.33329Z" fill="currentColor"/>
<path d="M7.66667 4C7.66667 3.28 7.84667 2.6 8.16 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.0333 2.15333 13.3667 2.39333 13.6067L8.94 7.06C8.15333 6.28 7.66667 5.2 7.66667 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStreetview }

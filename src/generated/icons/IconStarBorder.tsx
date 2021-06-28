import React, { FC } from 'react'

const IconStarBorder: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1 6.02667L9.87332 5.74667L8.61332 2.78C8.38665 2.24 7.61332 2.24 7.38665 2.78L6.12665 5.75333L2.90665 6.02667C2.31999 6.07333 2.07999 6.80667 2.52665 7.19333L4.97332 9.31333L4.23999 12.46C4.10665 13.0333 4.72665 13.4867 5.23332 13.18L7.99999 11.5133L10.7667 13.1867C11.2733 13.4933 11.8933 13.04 11.76 12.4667L11.0267 9.31333L13.4733 7.19333C13.92 6.80667 13.6867 6.07333 13.1 6.02667ZM7.99999 10.2667L5.49332 11.78L6.15999 8.92667L3.94665 7.00667L6.86665 6.75333L7.99999 4.06667L9.13999 6.76L12.06 7.01333L9.84665 8.93333L10.5133 11.7867L7.99999 10.2667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStarBorder }

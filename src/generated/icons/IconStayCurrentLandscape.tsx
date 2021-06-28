import React, { FC } from 'react'

const IconStayCurrentLandscape: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.673331 4.66665L0.666664 11.3333C0.666664 12.0666 1.26666 12.6666 2 12.6666H14C14.7333 12.6666 15.3333 12.0666 15.3333 11.3333V4.66665C15.3333 3.93331 14.7333 3.33331 14 3.33331H2C1.26666 3.33331 0.673331 3.93331 0.673331 4.66665ZM12.6667 4.66665V11.3333H3.33333V4.66665H12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStayCurrentLandscape }

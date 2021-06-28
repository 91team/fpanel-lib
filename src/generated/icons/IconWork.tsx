import React, { FC } from 'react'

const IconWork: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4.00004H10.6666V2.66671C10.6666 1.92671 10.0733 1.33337 9.33331 1.33337H6.66665C5.92665 1.33337 5.33331 1.92671 5.33331 2.66671V4.00004H2.66665C1.92665 4.00004 1.33998 4.59337 1.33998 5.33337L1.33331 12.6667C1.33331 13.4067 1.92665 14 2.66665 14H13.3333C14.0733 14 14.6666 13.4067 14.6666 12.6667V5.33337C14.6666 4.59337 14.0733 4.00004 13.3333 4.00004ZM9.33331 4.00004H6.66665V2.66671H9.33331V4.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWork }

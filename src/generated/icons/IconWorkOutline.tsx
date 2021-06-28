import React, { FC } from 'react'

const IconWorkOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33331 4.00004V2.66671H6.66665V4.00004H9.33331ZM2.66665 6.00004V12C2.66665 12.3667 2.96665 12.6667 3.33331 12.6667H12.6666C13.0333 12.6667 13.3333 12.3667 13.3333 12V6.00004C13.3333 5.63337 13.0333 5.33337 12.6666 5.33337H3.33331C2.96665 5.33337 2.66665 5.63337 2.66665 6.00004ZM13.3333 4.00004C14.0733 4.00004 14.6666 4.59337 14.6666 5.33337V12.6667C14.6666 13.4067 14.0733 14 13.3333 14H2.66665C1.92665 14 1.33331 13.4067 1.33331 12.6667L1.33998 5.33337C1.33998 4.59337 1.92665 4.00004 2.66665 4.00004H5.33331V2.66671C5.33331 1.92671 5.92665 1.33337 6.66665 1.33337H9.33331C10.0733 1.33337 10.6666 1.92671 10.6666 2.66671V4.00004H13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWorkOutline }

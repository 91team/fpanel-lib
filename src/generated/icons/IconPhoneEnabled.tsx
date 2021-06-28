import React, { FC } from 'react'

const IconPhoneEnabled: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.18667 10.18L4.88001 9.98664C5.28667 9.93997 5.68667 10.08 5.97334 10.3666L7.20001 11.5933C9.08667 10.6333 10.6333 9.09331 11.5933 7.19997L10.36 5.96664C10.0733 5.67997 9.93334 5.27997 9.98001 4.87331L10.1733 3.19331C10.2533 2.51997 10.82 2.01331 11.5 2.01331H12.6533C13.4067 2.01331 14.0333 2.63997 13.9867 3.39331C13.6333 9.08664 9.08001 13.6333 3.39334 13.9866C2.64001 14.0333 2.01334 13.4066 2.01334 12.6533V11.5C2.00667 10.8266 2.51334 10.26 3.18667 10.18Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhoneEnabled }

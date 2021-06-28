import React, { FC } from 'react'

const IconSyncAlt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4333 5.09994L12.5733 3.23994C12.36 3.02661 12 3.17327 12 3.47327V4.66661H2.66667C2.3 4.66661 2 4.96661 2 5.33327C2 5.69994 2.3 5.99994 2.66667 5.99994H12V7.19327C12 7.49327 12.36 7.63994 12.5667 7.42661L14.4267 5.56661C14.56 5.43994 14.56 5.22661 14.4333 5.09994Z" fill="currentColor"/>
<path d="M1.56666 10.9L3.42666 12.76C3.64 12.9733 4 12.8266 4 12.5266V11.3333H13.3333C13.7 11.3333 14 11.0333 14 10.6666C14 10.3 13.7 9.99998 13.3333 9.99998H4V8.80665C4 8.50665 3.64 8.35998 3.43333 8.57331L1.57333 10.4333C1.44 10.56 1.44 10.7733 1.56666 10.9Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSyncAlt }

import React, { FC } from 'react'

const IconPermDeviceInformation: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66665 4.66663H7.33331V5.99996H8.66665V4.66663ZM7.99998 7.33329C7.63331 7.33329 7.33331 7.63329 7.33331 7.99996V10.6666C7.33331 11.0333 7.63331 11.3333 7.99998 11.3333C8.36665 11.3333 8.66665 11.0333 8.66665 10.6666V7.99996C8.66665 7.63329 8.36665 7.33329 7.99998 7.33329ZM11.3333 0.673293L4.66665 0.666626C3.93331 0.666626 3.33331 1.26663 3.33331 1.99996V14C3.33331 14.7333 3.93331 15.3333 4.66665 15.3333H11.3333C12.0666 15.3333 12.6666 14.7333 12.6666 14V1.99996C12.6666 1.26663 12.0666 0.673293 11.3333 0.673293ZM11.3333 12.6666H4.66665V3.33329H11.3333V12.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPermDeviceInformation }

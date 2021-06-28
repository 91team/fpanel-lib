import React, { FC } from 'react'

const IconContentCopy: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.666626H2.66668C1.93334 0.666626 1.33334 1.26663 1.33334 1.99996V10.6666C1.33334 11.0333 1.63334 11.3333 2.00001 11.3333C2.36668 11.3333 2.66668 11.0333 2.66668 10.6666V2.66663C2.66668 2.29996 2.96668 1.99996 3.33334 1.99996H10C10.3667 1.99996 10.6667 1.69996 10.6667 1.33329C10.6667 0.966626 10.3667 0.666626 10 0.666626ZM12.6667 3.33329H5.33334C4.60001 3.33329 4.00001 3.93329 4.00001 4.66663V14C4.00001 14.7333 4.60001 15.3333 5.33334 15.3333H12.6667C13.4 15.3333 14 14.7333 14 14V4.66663C14 3.93329 13.4 3.33329 12.6667 3.33329ZM12 14H6.00001C5.63334 14 5.33334 13.7 5.33334 13.3333V5.33329C5.33334 4.96663 5.63334 4.66663 6.00001 4.66663H12C12.3667 4.66663 12.6667 4.96663 12.6667 5.33329V13.3333C12.6667 13.7 12.3667 14 12 14Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconContentCopy }

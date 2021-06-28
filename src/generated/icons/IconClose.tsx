import React, { FC } from 'react'

const IconClose: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2 3.80665C11.94 3.54665 11.52 3.54665 11.26 3.80665L8 7.05998L4.74 3.79998C4.48 3.53998 4.06 3.53998 3.8 3.79998C3.54 4.05998 3.54 4.47998 3.8 4.73998L7.06 7.99998L3.8 11.26C3.54 11.52 3.54 11.94 3.8 12.2C4.06 12.46 4.48 12.46 4.74 12.2L8 8.93998L11.26 12.2C11.52 12.46 11.94 12.46 12.2 12.2C12.46 11.94 12.46 11.52 12.2 11.26L8.94 7.99998L12.2 4.73998C12.4533 4.48665 12.4533 4.05998 12.2 3.80665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconClose }

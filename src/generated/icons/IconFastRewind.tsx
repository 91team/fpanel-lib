import React, { FC } from 'react'

const IconFastRewind: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33332 10.7133V5.2866C7.33332 4.7466 6.72665 4.43327 6.27999 4.73993L2.43332 7.45327C2.05999 7.71993 2.05999 8.27993 2.43332 8.53993L6.27999 11.2533C6.72665 11.5666 7.33332 11.2533 7.33332 10.7133ZM8.43999 8.5466L12.2867 11.2599C12.7267 11.5733 13.34 11.2533 13.34 10.7133V5.2866C13.34 4.7466 12.7333 4.43327 12.2867 4.73993L8.43999 7.45327C8.05999 7.71993 8.05999 8.27993 8.43999 8.5466Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFastRewind }

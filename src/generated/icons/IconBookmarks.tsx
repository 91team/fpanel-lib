import React, { FC } from 'react'

const IconBookmarks: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 12.0001L14 12.6667V2.00008C14 1.26675 13.4 0.666748 12.6667 0.666748H5.99333C5.26 0.666748 4.66667 1.26675 4.66667 2.00008H11.3333C12.0667 2.00008 12.6667 2.60008 12.6667 3.33341V12.0001ZM10 3.33341H3.33333C2.6 3.33341 2 3.93341 2 4.66675V15.3334L6.66667 13.3334L11.3333 15.3334V4.66675C11.3333 3.93341 10.7333 3.33341 10 3.33341Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBookmarks }

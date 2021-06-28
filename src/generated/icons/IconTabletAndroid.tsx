import React, { FC } from 'react'

const IconTabletAndroid: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0H4C2.89333 0 2 0.893333 2 2V14C2 15.1067 2.89333 16 4 16H12C13.1067 16 14 15.1067 14 14V2C14 0.893333 13.1067 0 12 0ZM9 14.6667H7C6.81333 14.6667 6.66667 14.52 6.66667 14.3333C6.66667 14.1467 6.81333 14 7 14H9C9.18667 14 9.33333 14.1467 9.33333 14.3333C9.33333 14.52 9.18667 14.6667 9 14.6667ZM12.8333 12.6667H3.16667V2H12.8333V12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTabletAndroid }

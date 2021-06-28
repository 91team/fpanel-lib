import React, { FC } from 'react'

const IconFlag: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59999 3.99996L9.43999 3.19996C9.37999 2.89329 9.10666 2.66663 8.78666 2.66663H3.99999C3.63333 2.66663 3.33333 2.96663 3.33333 3.33329V13.3333C3.33333 13.7 3.63333 14 3.99999 14C4.36666 14 4.66666 13.7 4.66666 13.3333V9.33329H8.4L8.56 10.1333C8.62 10.4466 8.89333 10.6666 9.21333 10.6666H12.6667C13.0333 10.6666 13.3333 10.3666 13.3333 9.99996V4.66663C13.3333 4.29996 13.0333 3.99996 12.6667 3.99996H9.59999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFlag }

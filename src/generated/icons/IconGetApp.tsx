import React, { FC } from 'react'

const IconGetApp: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.06 6H9.99998V2.66667C9.99998 2.3 9.69998 2 9.33331 2H6.66665C6.29998 2 5.99998 2.3 5.99998 2.66667V6H4.93998C4.34665 6 4.04665 6.72 4.46665 7.14L7.52665 10.2C7.78665 10.46 8.20665 10.46 8.46665 10.2L11.5266 7.14C11.9466 6.72 11.6533 6 11.06 6ZM3.33331 12.6667C3.33331 13.0333 3.63331 13.3333 3.99998 13.3333H12C12.3666 13.3333 12.6666 13.0333 12.6666 12.6667C12.6666 12.3 12.3666 12 12 12H3.99998C3.63331 12 3.33331 12.3 3.33331 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGetApp }

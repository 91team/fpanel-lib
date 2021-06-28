import React, { FC } from 'react'

const IconWysiwyg: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4067 2 12.6667 2ZM12.6667 12.6667H3.33333V4.66667H12.6667V12.6667ZM10.6667 8H5.33333C4.96667 8 4.66667 7.7 4.66667 7.33333C4.66667 6.96667 4.96667 6.66667 5.33333 6.66667H10.6667C11.0333 6.66667 11.3333 6.96667 11.3333 7.33333C11.3333 7.7 11.0333 8 10.6667 8ZM8 10.6667H5.33333C4.96667 10.6667 4.66667 10.3667 4.66667 10C4.66667 9.63333 4.96667 9.33333 5.33333 9.33333H8C8.36667 9.33333 8.66667 9.63333 8.66667 10C8.66667 10.3667 8.36667 10.6667 8 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWysiwyg }

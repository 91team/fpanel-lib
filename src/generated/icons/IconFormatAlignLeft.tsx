import React, { FC } from 'react'

const IconFormatAlignLeft: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 10H2.66667C2.3 10 2 10.3 2 10.6667C2 11.0333 2.3 11.3333 2.66667 11.3333H9.33333C9.7 11.3333 10 11.0333 10 10.6667C10 10.3 9.7 10 9.33333 10ZM9.33333 4.66667H2.66667C2.3 4.66667 2 4.96667 2 5.33333C2 5.7 2.3 6 2.66667 6H9.33333C9.7 6 10 5.7 10 5.33333C10 4.96667 9.7 4.66667 9.33333 4.66667ZM2.66667 8.66667H13.3333C13.7 8.66667 14 8.36667 14 8C14 7.63333 13.7 7.33333 13.3333 7.33333H2.66667C2.3 7.33333 2 7.63333 2 8C2 8.36667 2.3 8.66667 2.66667 8.66667ZM2.66667 14H13.3333C13.7 14 14 13.7 14 13.3333C14 12.9667 13.7 12.6667 13.3333 12.6667H2.66667C2.3 12.6667 2 12.9667 2 13.3333C2 13.7 2.3 14 2.66667 14ZM2 2.66667C2 3.03333 2.3 3.33333 2.66667 3.33333H13.3333C13.7 3.33333 14 3.03333 14 2.66667C14 2.3 13.7 2 13.3333 2H2.66667C2.3 2 2 2.3 2 2.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatAlignLeft }

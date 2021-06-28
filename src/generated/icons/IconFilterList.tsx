import React, { FC } from 'react'

const IconFilterList: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 12H8.66667C9.03333 12 9.33333 11.7 9.33333 11.3333C9.33333 10.9667 9.03333 10.6667 8.66667 10.6667H7.33333C6.96667 10.6667 6.66667 10.9667 6.66667 11.3333C6.66667 11.7 6.96667 12 7.33333 12ZM2 4.66667C2 5.03333 2.3 5.33333 2.66667 5.33333H13.3333C13.7 5.33333 14 5.03333 14 4.66667C14 4.3 13.7 4 13.3333 4H2.66667C2.3 4 2 4.3 2 4.66667ZM4.66667 8.66667H11.3333C11.7 8.66667 12 8.36667 12 8C12 7.63333 11.7 7.33333 11.3333 7.33333H4.66667C4.3 7.33333 4 7.63333 4 8C4 8.36667 4.3 8.66667 4.66667 8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFilterList }

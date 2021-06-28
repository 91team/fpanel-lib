import React, { FC } from 'react'

const IconSort: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66667 12H5.33333C5.7 12 6 11.7 6 11.3333C6 10.9667 5.7 10.6667 5.33333 10.6667H2.66667C2.3 10.6667 2 10.9667 2 11.3333C2 11.7 2.3 12 2.66667 12ZM2 4.66667C2 5.03333 2.3 5.33333 2.66667 5.33333H13.3333C13.7 5.33333 14 5.03333 14 4.66667C14 4.3 13.7 4 13.3333 4H2.66667C2.3 4 2 4.3 2 4.66667ZM2.66667 8.66667H9.33333C9.7 8.66667 10 8.36667 10 8C10 7.63333 9.7 7.33333 9.33333 7.33333H2.66667C2.3 7.33333 2 7.63333 2 8C2 8.36667 2.3 8.66667 2.66667 8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSort }

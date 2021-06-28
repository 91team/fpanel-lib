import React, { FC } from 'react'

const IconNotes: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 7.33333H2.66667C2.3 7.33333 2 7.63333 2 8C2 8.36667 2.3 8.66667 2.66667 8.66667H13.3333C13.7 8.66667 14 8.36667 14 8C14 7.63333 13.7 7.33333 13.3333 7.33333ZM2.66667 12H9.33333C9.7 12 10 11.7 10 11.3333C10 10.9667 9.7 10.6667 9.33333 10.6667H2.66667C2.3 10.6667 2 10.9667 2 11.3333C2 11.7 2.3 12 2.66667 12ZM13.3333 4H2.66667C2.3 4 2 4.3 2 4.66667V4.67333C2 5.04 2.3 5.34 2.66667 5.34H13.3333C13.7 5.34 14 5.04 14 4.67333V4.66667C14 4.3 13.7 4 13.3333 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNotes }

import React, { FC } from 'react'

const IconViewAgenda: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 8.66667H2.00001C1.63334 8.66667 1.33334 8.96667 1.33334 9.33333V13.3333C1.33334 13.7 1.63334 14 2.00001 14H13.3333C13.7 14 14 13.7 14 13.3333V9.33333C14 8.96667 13.7 8.66667 13.3333 8.66667ZM13.3333 2H2.00001C1.63334 2 1.33334 2.3 1.33334 2.66667V6.66667C1.33334 7.03333 1.63334 7.33333 2.00001 7.33333H13.3333C13.7 7.33333 14 7.03333 14 6.66667V2.66667C14 2.3 13.7 2 13.3333 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconViewAgenda }

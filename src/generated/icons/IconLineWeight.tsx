import React, { FC } from 'react'

const IconLineWeight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 10.0001H2.66667C2.3 10.0001 2 10.3001 2 10.6667C2 11.0334 2.3 11.3334 2.66667 11.3334H13.3333C13.7 11.3334 14 11.0334 14 10.6667C14 10.3001 13.7 10.0001 13.3333 10.0001ZM13.3333 6.66675H2.66667C2.3 6.66675 2 6.96675 2 7.33341V8.00008C2 8.36675 2.3 8.66675 2.66667 8.66675H13.3333C13.7 8.66675 14 8.36675 14 8.00008V7.33341C14 6.96675 13.7 6.66675 13.3333 6.66675ZM13.3333 2.66675H2.66667C2.3 2.66675 2 2.96675 2 3.33341V4.66675C2 5.03341 2.3 5.33341 2.66667 5.33341H13.3333C13.7 5.33341 14 5.03341 14 4.66675V3.33341C14 2.96675 13.7 2.66675 13.3333 2.66675ZM13.6667 12.6667H2.33333C2.14667 12.6667 2 12.8134 2 13.0001C2 13.1867 2.14667 13.3334 2.33333 13.3334H13.6667C13.8533 13.3334 14 13.1867 14 13.0001C14 12.8134 13.8533 12.6667 13.6667 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLineWeight }

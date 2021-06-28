import React, { FC } from 'react'

const IconPerson: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 8.00008C9.47332 8.00008 10.6667 6.80675 10.6667 5.33341C10.6667 3.86008 9.47332 2.66675 7.99999 2.66675C6.52666 2.66675 5.33332 3.86008 5.33332 5.33341C5.33332 6.80675 6.52666 8.00008 7.99999 8.00008ZM7.99999 9.33341C6.21999 9.33341 2.66666 10.2267 2.66666 12.0001V12.6667C2.66666 13.0334 2.96666 13.3334 3.33332 13.3334H12.6667C13.0333 13.3334 13.3333 13.0334 13.3333 12.6667V12.0001C13.3333 10.2267 9.77999 9.33341 7.99999 9.33341Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPerson }

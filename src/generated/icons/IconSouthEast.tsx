import React, { FC } from 'react'

const IconSouthEast: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.00002C11.6267 6.00002 11.3333 6.30002 11.3333 6.66669V10.3934L4.08 3.13335C3.82 2.87335 3.4 2.87335 3.14 3.13335C2.88 3.39335 2.88 3.81335 3.14 4.07335L10.3933 11.3334H6.66667C6.3 11.3334 6 11.6334 6 12C6 12.3667 6.3 12.6667 6.66667 12.6667H12C12.3667 12.6667 12.6667 12.3667 12.6667 12V6.66669C12.6667 6.30002 12.3667 6.00002 12 6.00002Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSouthEast }

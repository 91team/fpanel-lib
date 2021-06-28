import React, { FC } from 'react'

const IconVerticalAlignTop: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.14002 7.33333H7.33335V13.3333C7.33335 13.7 7.63335 14 8.00002 14C8.36669 14 8.66669 13.7 8.66669 13.3333V7.33333H9.86002C10.16 7.33333 10.3067 6.97333 10.0934 6.76667L8.23335 4.90667C8.10002 4.77333 7.89335 4.77333 7.76002 4.90667L5.90002 6.76667C5.69335 6.97333 5.84002 7.33333 6.14002 7.33333ZM2.66669 2.66667C2.66669 3.03333 2.96669 3.33333 3.33335 3.33333H12.6667C13.0334 3.33333 13.3334 3.03333 13.3334 2.66667C13.3334 2.3 13.0334 2 12.6667 2H3.33335C2.96669 2 2.66669 2.3 2.66669 2.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVerticalAlignTop }

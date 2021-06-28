import React, { FC } from 'react'

const IconRemoveRedEye: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00002 3C4.66669 3 1.82002 5.07333 0.666687 8C1.82002 10.9267 4.66669 13 8.00002 13C11.3334 13 14.18 10.9267 15.3334 8C14.18 5.07333 11.3334 3 8.00002 3ZM8.00002 11.3333C6.16002 11.3333 4.66669 9.84 4.66669 8C4.66669 6.16 6.16002 4.66667 8.00002 4.66667C9.84002 4.66667 11.3334 6.16 11.3334 8C11.3334 9.84 9.84002 11.3333 8.00002 11.3333ZM8.00002 6C6.89335 6 6.00002 6.89333 6.00002 8C6.00002 9.10667 6.89335 10 8.00002 10C9.10669 10 10 9.10667 10 8C10 6.89333 9.10669 6 8.00002 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRemoveRedEye }

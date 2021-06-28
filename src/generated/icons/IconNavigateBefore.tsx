import React, { FC } from 'react'

const IconNavigateBefore: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93999 4.47332C9.67999 4.21332 9.25999 4.21332 8.99999 4.47332L5.94 7.53332C5.68 7.79332 5.68 8.21332 5.94 8.47332L8.99999 11.5333C9.25999 11.7933 9.67999 11.7933 9.93999 11.5333C10.2 11.2733 10.2 10.8533 9.93999 10.5933L7.35333 7.99999L9.93999 5.41332C10.1933 5.15332 10.1933 4.72665 9.93999 4.47332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNavigateBefore }

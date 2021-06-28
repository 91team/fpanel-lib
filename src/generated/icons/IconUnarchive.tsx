import React, { FC } from 'react'

const IconUnarchive: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7 3.48L12.7733 2.36C12.5867 2.14 12.3133 2 12 2H4C3.68667 2 3.41333 2.14 3.23333 2.36667L2.30667 3.48C2.11333 3.71333 2 4.00667 2 4.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V4.33333C14 4.00667 13.8867 3.71333 13.7 3.48ZM8.23333 6.56667L11.6667 10H9.33333V11.3333H6.66667V10H4.33333L7.76667 6.56667C7.89333 6.44 8.10667 6.44 8.23333 6.56667ZM3.41333 3.33333L3.96 2.66667H11.96L12.58 3.33333H3.41333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconUnarchive }

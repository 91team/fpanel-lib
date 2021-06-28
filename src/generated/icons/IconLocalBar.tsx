import React, { FC } from 'react'

const IconLocalBar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2.96667C14 2.43333 13.5667 2 13.0333 2H2.96667C2.43333 2 2 2.43333 2 2.96667C2 3.2 2.08667 3.43333 2.24667 3.60667L7.33333 9.33333V12.6667H4.66667C4.3 12.6667 4 12.9667 4 13.3333C4 13.7 4.3 14 4.66667 14H11.3333C11.7 14 12 13.7 12 13.3333C12 12.9667 11.7 12.6667 11.3333 12.6667H8.66667V9.33333L13.7533 3.60667C13.9133 3.43333 14 3.2 14 2.96667ZM4.95333 4.66667L3.77333 3.33333H12.2333L11.0467 4.66667H4.95333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalBar }

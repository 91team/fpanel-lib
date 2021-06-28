import React, { FC } from 'react'

const IconArchive: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6933 3.48667L12.7667 2.36667C12.5867 2.14 12.3133 2 12 2H4C3.68667 2 3.41333 2.14 3.22667 2.36667L2.30667 3.48667C2.11333 3.71333 2 4.01333 2 4.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V4.33333C14 4.01333 13.8867 3.71333 13.6933 3.48667ZM7.76667 11.4333L4.33333 8H6.66667V6.66667H9.33333V8H11.6667L8.23333 11.4333C8.10667 11.56 7.89333 11.56 7.76667 11.4333ZM3.41333 3.33333L3.95333 2.66667H11.9533L12.58 3.33333H3.41333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArchive }

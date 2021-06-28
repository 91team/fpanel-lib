import React, { FC } from 'react'

const IconTrendingDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2334 11.4334L12.1934 10.4734L8.94003 7.22006L6.74669 9.41339C6.48669 9.67339 6.06669 9.67339 5.80669 9.41339L1.80669 5.40673C1.54669 5.14673 1.54669 4.72673 1.80669 4.46673C2.06669 4.20673 2.48669 4.20673 2.74669 4.46673L6.27336 8.00006L8.46669 5.80673C8.72669 5.54673 9.14669 5.54673 9.40669 5.80673L13.1334 9.52673L14.0934 8.56673C14.3 8.36006 14.66 8.50673 14.66 8.80006V11.6601C14.66 11.8467 14.5134 11.9934 14.3267 11.9934H11.4667C11.1734 12.0001 11.0267 11.6401 11.2334 11.4334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTrendingDown }

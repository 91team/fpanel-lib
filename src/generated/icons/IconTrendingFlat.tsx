import React, { FC } from 'react'

const IconTrendingFlat: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4333 7.76669L12.5733 5.90669C12.36 5.69335 12 5.84002 12 6.14002V7.33335H2.66667C2.3 7.33335 2 7.63335 2 8.00002C2 8.36669 2.3 8.66669 2.66667 8.66669H12V9.86002C12 10.16 12.36 10.3067 12.5667 10.0934L14.4267 8.23335C14.56 8.10669 14.56 7.89335 14.4333 7.76669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTrendingFlat }

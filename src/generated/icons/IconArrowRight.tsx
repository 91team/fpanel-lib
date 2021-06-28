import React, { FC } from 'react'

const IconArrowRight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.80669 10.1933L9.53335 8.46665C9.79335 8.20665 9.79335 7.78665 9.53335 7.52665L7.80669 5.79998C7.38669 5.38665 6.66669 5.67998 6.66669 6.27331V9.71998C6.66669 10.32 7.38669 10.6133 7.80669 10.1933Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowRight }

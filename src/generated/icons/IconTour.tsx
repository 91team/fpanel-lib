import React, { FC } from 'react'

const IconTour: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6333 3.58004C13.8067 3.14004 13.4867 2.66671 13.0133 2.66671H8.66667H8H4.66667V2.00004C4.66667 1.63337 4.36667 1.33337 4 1.33337C3.63334 1.33337 3.33334 1.63337 3.33334 2.00004V2.66671V9.33337V14.6667H4.66667V9.33337H7.33334H8H13.0133C13.4867 9.33337 13.8067 8.86004 13.6333 8.42004L12.6667 6.00004L13.6333 3.58004ZM10 6.00004C10 6.73337 9.4 7.33337 8.66667 7.33337C7.93334 7.33337 7.33334 6.73337 7.33334 6.00004C7.33334 5.26671 7.93334 4.66671 8.66667 4.66671C9.4 4.66671 10 5.26671 10 6.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTour }

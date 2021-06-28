import React, { FC } from 'react'

const IconWatchLater: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33337C4.33333 1.33337 1.33333 4.33337 1.33333 8.00004C1.33333 11.6667 4.33333 14.6667 8 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8.00004C14.6667 4.33337 11.6667 1.33337 8 1.33337ZM10.3667 10.5334L7.64666 8.86004C7.44666 8.74004 7.32666 8.52671 7.32666 8.29337V5.16671C7.33333 4.89337 7.56 4.66671 7.83333 4.66671C8.10666 4.66671 8.33333 4.89337 8.33333 5.16671V8.13337L10.8933 9.67337C11.1333 9.82004 11.2133 10.1334 11.0667 10.3734C10.92 10.6067 10.6067 10.68 10.3667 10.5334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWatchLater }

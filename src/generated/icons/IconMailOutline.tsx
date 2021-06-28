import React, { FC } from 'react'

const IconMailOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66669H2.66666C1.93333 2.66669 1.33999 3.26669 1.33999 4.00002L1.33333 12C1.33333 12.7334 1.93333 13.3334 2.66666 13.3334H13.3333C14.0667 13.3334 14.6667 12.7334 14.6667 12V4.00002C14.6667 3.26669 14.0667 2.66669 13.3333 2.66669ZM12.6667 12H3.33333C2.96666 12 2.66666 11.7 2.66666 11.3334V5.33335L7.29333 8.22669C7.72666 8.50002 8.27333 8.50002 8.70666 8.22669L13.3333 5.33335V11.3334C13.3333 11.7 13.0333 12 12.6667 12ZM8 7.33335L2.66666 4.00002H13.3333L8 7.33335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMailOutline }

import React, { FC } from 'react'

const IconMms: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33337H2.66668C1.93334 1.33337 1.33334 1.93337 1.33334 2.66671V14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66671C14.6667 1.93337 14.0667 1.33337 13.3333 1.33337ZM3.75334 8.79337L5.41334 6.66004C5.54668 6.49337 5.80001 6.48671 5.93334 6.65337L7.33334 8.34004L9.40001 5.68004C9.53334 5.50671 9.80001 5.50671 9.93334 5.68671L12.2733 8.80671C12.44 9.02671 12.28 9.34004 12.0067 9.34004H4.01334C3.74001 9.33337 3.58001 9.01337 3.75334 8.79337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMms }

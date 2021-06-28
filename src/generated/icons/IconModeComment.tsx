import React, { FC } from 'react'

const IconModeComment: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 2.66668C14.6667 1.93334 14.0667 1.33334 13.3333 1.33334H2.66668C1.93334 1.33334 1.33334 1.93334 1.33334 2.66668V10.6667C1.33334 11.4 1.93334 12 2.66668 12H12L14.6667 14.6667V2.66668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconModeComment }

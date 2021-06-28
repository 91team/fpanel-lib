import React, { FC } from 'react'

const IconStayPrimaryLandscape: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.673354 4.66668L0.666687 11.3333C0.666687 12.0667 1.26669 12.6667 2.00002 12.6667H14C14.7334 12.6667 15.3334 12.0667 15.3334 11.3333V4.66668C15.3334 3.93334 14.7334 3.33334 14 3.33334H2.00002C1.26669 3.33334 0.673354 3.93334 0.673354 4.66668ZM12.6667 4.66668V11.3333H3.33335V4.66668H12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconStayPrimaryLandscape }

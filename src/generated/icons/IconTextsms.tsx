import React, { FC } from 'react'

const IconTextsms: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33334H2.66668C1.93334 1.33334 1.34001 1.93334 1.34001 2.66668L1.33334 14.6667L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6667V2.66668C14.6667 1.93334 14.0667 1.33334 13.3333 1.33334ZM6.00001 7.33334H4.66668V6.00001H6.00001V7.33334ZM8.66668 7.33334H7.33334V6.00001H8.66668V7.33334ZM11.3333 7.33334H10V6.00001H11.3333V7.33334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTextsms }

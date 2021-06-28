import React, { FC } from 'react'

const IconAccountTree: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 7.33333H13.3333C14.0733 7.33333 14.6667 6.73333 14.6667 6V3.33333C14.6667 2.59333 14.0667 2 13.3333 2H11.3333C10.5933 2 10 2.6 10 3.33333V4H6.00667V3.33333C6.00667 2.59333 5.40667 2 4.67334 2H2.66667C1.93334 2 1.33334 2.6 1.33334 3.33333V6C1.33334 6.74 1.93334 7.33333 2.66667 7.33333H4.66667C5.40667 7.33333 6 6.73333 6 6V5.33333H7.33334V10.0067C7.33334 11.1067 8.22667 12 9.32667 12H10V12.6667C10 13.4067 10.6 14 11.3333 14H13.3333C14.0733 14 14.6667 13.4 14.6667 12.6667V10C14.6667 9.26 14.0667 8.66667 13.3333 8.66667H11.3333C10.5933 8.66667 10 9.26667 10 10V10.6667H9.32667C8.96667 10.6667 8.66667 10.3667 8.66667 10.0067V5.33333H10V6C10 6.73333 10.6 7.33333 11.3333 7.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAccountTree }

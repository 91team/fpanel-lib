import React, { FC } from 'react'

const IconLaptopWindows: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 12V11.3333C14.0667 11.3333 14.66 10.7333 14.66 10L14.6667 3.33333C14.6667 2.6 14.0667 2 13.3333 2H2.66667C1.93333 2 1.33333 2.6 1.33333 3.33333V10C1.33333 10.7333 1.93333 11.3333 2.66667 11.3333V12H0.666667C0.3 12 0 12.3 0 12.6667C0 13.0333 0.3 13.3333 0.666667 13.3333H15.3333C15.7 13.3333 16 13.0333 16 12.6667C16 12.3 15.7 12 15.3333 12H13.3333ZM3.33333 3.33333H12.6667C13.0333 3.33333 13.3333 3.63333 13.3333 4V9.33333C13.3333 9.7 13.0333 10 12.6667 10H3.33333C2.96667 10 2.66667 9.7 2.66667 9.33333V4C2.66667 3.63333 2.96667 3.33333 3.33333 3.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLaptopWindows }

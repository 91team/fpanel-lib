import React, { FC } from 'react'

const IconLaptopChromebook: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3333 12H14.6667V3.33333C14.6667 2.6 14.0667 2 13.3333 2H2.66667C1.93333 2 1.33333 2.6 1.33333 3.33333V12H0.666667C0.3 12 0 12.3 0 12.6667C0 13.0333 0.3 13.3333 0.666667 13.3333H15.3333C15.7 13.3333 16 13.0333 16 12.6667C16 12.3 15.7 12 15.3333 12ZM9 12H7C6.81333 12 6.66667 11.8533 6.66667 11.6667C6.66667 11.48 6.81333 11.3333 7 11.3333H9C9.18667 11.3333 9.33333 11.48 9.33333 11.6667C9.33333 11.8533 9.18667 12 9 12ZM13.3333 10H2.66667V4C2.66667 3.63333 2.96667 3.33333 3.33333 3.33333H12.6667C13.0333 3.33333 13.3333 3.63333 13.3333 4V10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLaptopChromebook }

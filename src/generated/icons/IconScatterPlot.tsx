import React, { FC } from 'react'

const IconScatterPlot: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66666 11.3333C5.77123 11.3333 6.66666 10.4379 6.66666 9.33333C6.66666 8.22876 5.77123 7.33333 4.66666 7.33333C3.56209 7.33333 2.66666 8.22876 2.66666 9.33333C2.66666 10.4379 3.56209 11.3333 4.66666 11.3333Z" fill="currentColor"/>
<path d="M7.33334 6C8.43791 6 9.33334 5.10457 9.33334 4C9.33334 2.89543 8.43791 2 7.33334 2C6.22877 2 5.33334 2.89543 5.33334 4C5.33334 5.10457 6.22877 6 7.33334 6Z" fill="currentColor"/>
<path d="M11.0667 13.7333C12.1712 13.7333 13.0667 12.8379 13.0667 11.7333C13.0667 10.6288 12.1712 9.73334 11.0667 9.73334C9.96208 9.73334 9.06665 10.6288 9.06665 11.7333C9.06665 12.8379 9.96208 13.7333 11.0667 13.7333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconScatterPlot }

import React, { FC } from 'react'

const IconRestaurantMenu: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4 8.8933L7.28667 7.00664L3.16 2.88664C2.84 2.56664 2.28667 2.6533 2.08667 3.06664C1.61333 4.05997 1.78667 5.27997 2.60667 6.10664L5.4 8.8933ZM9.92 7.68664C10.94 8.15997 12.3733 7.82664 13.4333 6.76664C14.7067 5.4933 14.9533 3.66664 13.9733 2.68664C13 1.7133 11.1733 1.95331 9.89333 3.22664C8.83333 4.28664 8.5 5.71997 8.97333 6.73997L2.93333 12.78C2.67333 13.04 2.67333 13.46 2.93333 13.72C3.19333 13.98 3.61333 13.98 3.87333 13.72L8 9.60664L12.12 13.7266C12.38 13.9866 12.8 13.9866 13.06 13.7266C13.32 13.4666 13.32 13.0466 13.06 12.7866L8.94 8.66664L9.92 7.68664Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRestaurantMenu }

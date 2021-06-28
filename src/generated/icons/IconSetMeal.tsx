import React, { FC } from 'react'

const IconSetMeal: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5333 11.7333L2.55334 12.3067C2.28001 12.32 2.04001 12.1067 2.02668 11.8333C2.01334 11.56 2.22668 11.32 2.50001 11.3067L13.4867 10.7333C13.76 10.72 14 10.9333 14.0133 11.2067C14.0267 11.48 13.8133 11.72 13.5333 11.7333ZM13.5 12.9867H2.50001C2.22668 12.9867 2.00001 13.2133 2.00001 13.4867C2.00001 13.76 2.22668 13.9867 2.50001 13.9867H13.5C13.7733 13.9867 14 13.76 14 13.4867C14 13.2133 13.7733 12.9867 13.5 12.9867ZM14.6667 3.33333V8C14.6667 8.73333 14.0667 9.33333 13.3333 9.33333H2.66668C1.93334 9.33333 1.33334 8.73333 1.33334 8V3.33333C1.33334 2.6 1.93334 2 2.66668 2H13.3333C14.0667 2 14.6667 2.6 14.6667 3.33333ZM12.7467 4.06C11.9133 4.24 11.2867 4.8 11.1933 5.48667C10.7667 5 9.37334 3.66667 6.83334 3.66667C4.54001 3.66667 3.18001 4.75333 2.62668 5.32667C2.44001 5.52 2.44001 5.82 2.62668 6.01333C3.18001 6.58667 4.54001 7.67333 6.83334 7.67333C9.37334 7.67333 10.7667 6.34 11.1933 5.85333C11.2867 6.53333 11.9133 7.09333 12.7467 7.28C13.0533 7.34667 13.3333 7.09333 13.3333 6.78667V4.56C13.3333 4.24667 13.0467 3.99333 12.7467 4.06Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSetMeal }

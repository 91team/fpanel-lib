import React, { FC } from 'react'

const IconCastConnected: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 10.6667V5.33333C12.6667 4.96667 12.3667 4.66667 12 4.66667H4C3.63334 4.66667 3.33334 4.96667 3.33334 5.33333V5.75333C5.97334 6.60667 8.06 8.69333 8.91334 11.3333H12C12.3667 11.3333 12.6667 11.0333 12.6667 10.6667ZM14 2H2.00001C1.26667 2 0.666672 2.6 0.666672 3.33333V4.66667C0.666672 5.03333 0.966672 5.33333 1.33334 5.33333C1.70001 5.33333 2.00001 5.03333 2.00001 4.66667V4C2.00001 3.63333 2.3 3.33333 2.66667 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V12C14 12.3667 13.7 12.6667 13.3333 12.6667H10C9.63334 12.6667 9.33334 12.9667 9.33334 13.3333C9.33334 13.7 9.63334 14 10 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM0.666672 12V14H2.66667C2.66667 13.5867 2.54 13.2 2.32667 12.88C1.96667 12.3467 1.36001 12 0.666672 12ZM1.42667 9.39333C1.02667 9.32667 0.666672 9.65333 0.666672 10.06C0.666672 10.3867 0.906672 10.66 1.23334 10.7133C2.62 10.9533 3.71334 12.0467 3.95334 13.4333C4.00667 13.76 4.28 14 4.60667 14C5.01334 14 5.33334 13.64 5.27334 13.24C4.95334 11.2667 3.39334 9.71333 1.42667 9.39333ZM1.4 6.7C1.00667 6.66667 0.666672 6.97333 0.666672 7.36667C0.666672 7.70667 0.920005 7.99333 1.25334 8.02667C4.1 8.3 6.36667 10.5667 6.64 13.4133C6.67334 13.7467 6.96 13.9933 7.3 13.9933C7.7 13.9933 8.00667 13.6467 7.96667 13.2533C7.61334 9.79333 4.86 7.04667 1.4 6.7Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCastConnected }

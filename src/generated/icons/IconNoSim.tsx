import React, { FC } from 'react'

const IconNoSim: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.06001 2.96C1.80001 3.22 1.80001 3.64 2.06001 3.9L3.41334 5.25333L3.33334 5.34V12.6667C3.33334 13.4 3.93334 14 4.66667 14H11.3333C11.5667 14 11.7867 13.9333 11.98 13.8267L12.76 14.6067C13.02 14.8667 13.44 14.8667 13.7 14.6067C13.96 14.3467 13.96 13.9267 13.7 13.6667L3.00001 2.96C2.74001 2.7 2.32001 2.7 2.06001 2.96ZM12.6667 10.74V3.33333C12.6667 2.6 12.0667 2 11.3333 2H6.67334L5.3 3.37333L12.6667 10.74Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNoSim }

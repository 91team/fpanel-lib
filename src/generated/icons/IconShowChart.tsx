import React, { FC } from 'react'

const IconShowChart: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.80001 11.8533L6.33334 8.31999L8.50001 10.4867C8.77334 10.76 9.21334 10.7467 9.46668 10.46L14.2467 5.07999C14.48 4.81999 14.4667 4.41999 14.22 4.16666C13.9533 3.89999 13.5067 3.90666 13.2533 4.19333L8.99334 8.97999L6.80001 6.78666C6.54001 6.52666 6.12001 6.52666 5.86001 6.78666L1.80001 10.8533C1.54001 11.1133 1.54001 11.5333 1.80001 11.7933L1.86001 11.8533C2.12001 12.1133 2.54668 12.1133 2.80001 11.8533Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconShowChart }

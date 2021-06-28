import React, { FC } from 'react'

const IconSportsMotorsports: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 7.59345C8.00001 7.16011 7.74001 6.77345 7.34668 6.60678L3.62668 5.03345C2.64001 6.15345 2.08001 7.50011 1.76001 8.66678H6.92668C7.52001 8.66678 8.00001 8.18678 8.00001 7.59345Z" fill="currentColor"/>
<path d="M14.64 7.48007C14.3667 4.54007 11.6 2.48674 8.65334 2.68007C6.98001 2.78674 5.69334 3.30674 4.70001 4.04007L7.86001 5.38007C8.74668 5.76007 9.32668 6.62674 9.32668 7.5934C9.32668 8.92007 8.24668 10.0001 6.92001 10.0001H1.47334C1.33334 10.8734 1.33334 11.4667 1.33334 11.4667V12.0001C1.33334 12.7334 1.93334 13.3334 2.66668 13.3334H9.33334C12.4467 13.3334 14.94 10.6601 14.64 7.48007Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsMotorsports }

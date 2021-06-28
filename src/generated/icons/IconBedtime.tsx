import React, { FC } from 'react'

const IconBedtime: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.98001 1.82002C8.08667 1.59335 7.90001 1.34002 7.64667 1.35335C3.64667 1.55335 0.666674 5.24002 1.46001 9.32668C1.98001 12.0133 4.18667 14.14 6.88667 14.5733C9.60001 15.0133 12.0667 13.8133 13.4667 11.8067C13.6067 11.6 13.4933 11.3067 13.2467 11.28C8.75334 10.7733 6.00001 5.97335 7.98001 1.82002Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBedtime }

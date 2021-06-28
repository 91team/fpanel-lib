import React, { FC } from 'react'

const IconWest: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.46666 12.1999C6.72666 11.9399 6.72666 11.5199 6.46666 11.2599L3.88666 8.66657H14C14.3667 8.66657 14.6667 8.36657 14.6667 7.99991C14.6667 7.63324 14.3667 7.33324 14 7.33324H3.88666L6.47333 4.74657C6.73333 4.48657 6.73333 4.06657 6.47333 3.80657C6.21333 3.54657 5.79333 3.54657 5.53333 3.80657L1.8 7.53324C1.54 7.79324 1.54 8.21324 1.8 8.47324L5.52666 12.1999C5.78666 12.4532 6.21333 12.4532 6.46666 12.1999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWest }

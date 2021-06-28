import React, { FC } from 'react'

const IconThermostat: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.66671V3.33337C10 2.22671 9.10666 1.33337 8 1.33337C6.89333 1.33337 6 2.22671 6 3.33337V8.66671C5.19333 9.27337 4.66666 10.2467 4.66666 11.3334C4.66666 13.1734 6.16 14.6667 8 14.6667C9.84 14.6667 11.3333 13.1734 11.3333 11.3334C11.3333 10.2467 10.8067 9.27337 10 8.66671ZM8.66666 7.33337H7.33333V3.33337C7.33333 2.96671 7.63333 2.66671 8 2.66671C8.36666 2.66671 8.66666 2.96671 8.66666 3.33337H8.33333C8.14666 3.33337 8 3.48004 8 3.66671C8 3.85337 8.14666 4.00004 8.33333 4.00004H8.66666V5.33337H8.33333C8.14666 5.33337 8 5.48004 8 5.66671C8 5.85337 8.14666 6.00004 8.33333 6.00004H8.66666V7.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconThermostat }

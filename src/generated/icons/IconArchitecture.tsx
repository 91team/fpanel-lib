import React, { FC } from 'react'

const IconArchitecture: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.24001 12.5201L4.40667 14.0001L5.48667 12.9734L7.33334 7.90675C6.88001 7.79342 6.48001 7.56675 6.15334 7.25342L4.24001 12.5201Z" fill="currentColor"/>
<path d="M9.84667 7.25342C9.52001 7.56675 9.11334 7.79342 8.66667 7.90675L10.5133 12.9734L11.5933 14.0001L11.7667 12.5201L9.84667 7.25342Z" fill="currentColor"/>
<path d="M9.96 5.73333C10.16 4.69333 9.56 3.77333 8.66667 3.45333V2.66667C8.66667 2.3 8.36667 2 8 2C7.63333 2 7.33333 2.3 7.33333 2.66667V3.45333C6.56 3.73333 6 4.46667 6 5.33333C6 6.56 7.10667 7.53333 8.37333 7.3C9.16 7.15333 9.80667 6.52 9.96 5.73333ZM8 6C7.63333 6 7.33333 5.7 7.33333 5.33333C7.33333 4.96667 7.63333 4.66667 8 4.66667C8.36667 4.66667 8.66667 4.96667 8.66667 5.33333C8.66667 5.7 8.36667 6 8 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArchitecture }

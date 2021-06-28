import React, { FC } from 'react'

const IconHistoryEdu: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.33341V3.58675C5.44667 3.36675 4.85333 3.25341 4.26 3.25341C3.31333 3.25341 2.36667 3.54008 1.56 4.11341C1.22 4.35341 1.18 4.84008 1.47333 5.13341L3.18667 6.84675H3.92667V7.58675C4.5 8.16008 5.24667 8.46008 6 8.49341V10.0001H4.66667C4.3 10.0001 4 10.3001 4 10.6667V12.0001C4 12.7334 4.6 13.3334 5.33333 13.3334H12C13.1067 13.3334 14 12.4401 14 11.3334V3.33341C14 2.96675 13.7 2.66675 13.3333 2.66675H6.66667C6.3 2.66675 6 2.96675 6 3.33341ZM5.26 6.94008V5.50675H3.74L3.04667 4.81341C3.42667 4.66675 3.84 4.58675 4.26 4.58675C5.15333 4.58675 5.98667 4.93341 6.62 5.56008L7.56 6.50008L7.42667 6.63341C7.08667 6.97341 6.63333 7.16675 6.14667 7.16675C5.83333 7.16675 5.52667 7.08675 5.26 6.94008ZM12.6667 11.3334C12.6667 11.7001 12.3667 12.0001 12 12.0001C11.6333 12.0001 11.3333 11.7001 11.3333 11.3334V10.6667C11.3333 10.3001 11.0333 10.0001 10.6667 10.0001H7.33333V8.27341C7.71333 8.12008 8.06667 7.89341 8.37333 7.58675L8.50667 7.45341L10.3933 9.33341H11.3333V8.39341L7.33333 4.41341V4.00008H12.6667V11.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHistoryEdu }

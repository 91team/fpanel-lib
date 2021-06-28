import React, { FC } from 'react'

const IconWatch: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 8C13.3333 6.30667 12.54 4.79333 11.3067 3.82L10.8533 1.11333C10.7467 0.473333 10.1867 0 9.54 0H6.46667C5.81334 0 5.25334 0.473333 5.14667 1.11333L4.70001 3.82C3.46001 4.79333 2.66667 6.3 2.66667 8C2.66667 9.7 3.46001 11.2067 4.70001 12.18L5.14667 14.8867C5.25334 15.5267 5.81334 16 6.46667 16H9.54C10.1933 16 10.7467 15.5267 10.8533 14.8867L11.3067 12.18C12.54 11.2067 13.3333 9.69333 13.3333 8ZM4.00001 8C4.00001 5.79333 5.79334 4 8 4C10.2067 4 12 5.79333 12 8C12 10.2067 10.2067 12 8 12C5.79334 12 4.00001 10.2067 4.00001 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWatch }

import React, { FC } from 'react'

const IconCheckCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33325C4.31999 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM6.19333 10.8599L3.79999 8.46659C3.53999 8.20659 3.53999 7.78659 3.79999 7.52659C4.05999 7.26659 4.48 7.26659 4.74 7.52659L6.66666 9.44659L11.2533 4.85992C11.5133 4.59992 11.9333 4.59992 12.1933 4.85992C12.4533 5.11992 12.4533 5.53992 12.1933 5.79992L7.13333 10.8599C6.87999 11.1199 6.45333 11.1199 6.19333 10.8599Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCheckCircle }

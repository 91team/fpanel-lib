import React, { FC } from 'react'

const IconAirplay: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.60666 14.6667H10.3867C10.98 14.6667 11.28 13.9467 10.86 13.5267L8.46666 11.1333C8.20666 10.8733 7.78666 10.8733 7.52666 11.1333L5.13332 13.5267C4.71999 13.9467 5.01332 14.6667 5.60666 14.6667ZM14 2H1.99999C1.26666 2 0.666656 2.6 0.666656 3.33333V11.3333C0.666656 12.0667 1.26666 12.6667 1.99999 12.6667H3.99999C4.36666 12.6667 4.66666 12.3667 4.66666 12C4.66666 11.6333 4.36666 11.3333 3.99999 11.3333H2.66666C2.29999 11.3333 1.99999 11.0333 1.99999 10.6667V4C1.99999 3.63333 2.29999 3.33333 2.66666 3.33333H13.3333C13.7 3.33333 14 3.63333 14 4V10.6667C14 11.0333 13.7 11.3333 13.3333 11.3333H12C11.6333 11.3333 11.3333 11.6333 11.3333 12C11.3333 12.3667 11.6333 12.6667 12 12.6667H14C14.7333 12.6667 15.3333 12.0667 15.3333 11.3333V3.33333C15.3333 2.6 14.7333 2 14 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAirplay }

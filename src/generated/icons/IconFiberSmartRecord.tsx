import React, { FC } from 'react'

const IconFiberSmartRecord: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 13.3334C8.94552 13.3334 11.3333 10.9456 11.3333 8.00008C11.3333 5.05456 8.94552 2.66675 6 2.66675C3.05449 2.66675 0.666672 5.05456 0.666672 8.00008C0.666672 10.9456 3.05449 13.3334 6 13.3334Z" fill="currentColor"/>
<path d="M11.3333 3.69999V3.81999C11.3333 4.06666 11.4867 4.27999 11.7133 4.38666C13.0667 5.02666 14 6.40666 14 7.99999C14 9.59333 13.0667 10.9733 11.7133 11.6133C11.4867 11.72 11.3333 11.9267 11.3333 12.1733V12.2933C11.3333 12.7467 11.8067 13.0333 12.2133 12.84C14.0533 12.0067 15.3333 10.1533 15.3333 7.99999C15.3333 5.84666 14.0533 3.99333 12.2133 3.15333C11.8067 2.96666 11.3333 3.24666 11.3333 3.69999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFiberSmartRecord }

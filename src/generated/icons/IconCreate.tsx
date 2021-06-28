import React, { FC } from 'react'

const IconCreate: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.64V13.6666C2 13.8533 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9666 4.59333 13.9L11.8733 6.62662L9.37333 4.12662L2.1 11.4C2.03333 11.4666 2 11.5466 2 11.64ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCreate }

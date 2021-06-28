import React, { FC } from 'react'

const IconEdit: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEdit }

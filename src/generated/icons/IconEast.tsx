import React, { FC } from 'react'

const IconEast: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.52665 3.80669C9.26665 4.06669 9.26665 4.48669 9.52665 4.74669L12.1133 7.33336H1.99998C1.63331 7.33336 1.33331 7.63336 1.33331 8.00003C1.33331 8.36669 1.63331 8.66669 1.99998 8.66669H12.12L9.53331 11.2534C9.27331 11.5134 9.27331 11.9334 9.53331 12.1934C9.79331 12.4534 10.2133 12.4534 10.4733 12.1934L14.2 8.46669C14.46 8.20669 14.46 7.78669 14.2 7.52669L10.4666 3.80669C10.2133 3.54669 9.78665 3.54669 9.52665 3.80669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEast }

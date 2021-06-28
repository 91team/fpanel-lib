import React, { FC } from 'react'

const IconLinkedCamera: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.3334C9.10457 11.3334 10 10.4379 10 9.33337C10 8.2288 9.10457 7.33337 8 7.33337C6.89543 7.33337 6 8.2288 6 9.33337C6 10.4379 6.89543 11.3334 8 11.3334Z" fill="currentColor"/>
<path d="M11.0666 2.24672C12.4666 2.42672 13.58 3.53339 13.7533 4.93339C13.78 5.16006 13.9666 5.33339 14.1933 5.33339C14.4533 5.33339 14.6666 5.10672 14.6333 4.84672C14.4133 3.03339 12.9666 1.58672 11.1533 1.36672C10.8933 1.33339 10.6666 1.54672 10.6666 1.80672C10.6666 2.03339 10.84 2.22006 11.0666 2.24672ZM12.82 4.79339C12.62 4.00006 12 3.38006 11.2066 3.18006C10.9333 3.11339 10.6666 3.32672 10.6666 3.61339C10.6666 3.80672 10.7933 3.99339 10.9866 4.04006C11.4666 4.16006 11.8466 4.53339 11.96 5.01339C12.0066 5.20672 12.1866 5.33339 12.3866 5.33339C12.6733 5.33339 12.8866 5.06672 12.82 4.79339ZM11.3333 6.00006C11.3333 5.26672 10.7333 4.66672 9.99998 4.66672V3.33339C9.99998 2.96672 9.69998 2.66672 9.33331 2.66672H6.58665C6.21331 2.66672 5.85331 2.82672 5.59998 3.10006L4.77998 4.00006H2.66665C1.93331 4.00006 1.33331 4.60006 1.33331 5.33339V13.3334C1.33331 14.0667 1.93331 14.6667 2.66665 14.6667H13.3333C14.0666 14.6667 14.6666 14.0667 14.6666 13.3334V7.33339C14.6666 6.60006 14.0666 6.00006 13.3333 6.00006H11.3333ZM7.99998 12.6667C6.15998 12.6667 4.66665 11.1734 4.66665 9.33339C4.66665 7.49339 6.15998 6.00006 7.99998 6.00006C9.83998 6.00006 11.3333 7.49339 11.3333 9.33339C11.3333 11.1734 9.83998 12.6667 7.99998 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLinkedCamera }

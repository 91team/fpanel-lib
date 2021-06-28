import React, { FC } from 'react'

const IconWeb: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66675H2.66665C1.93331 2.66675 1.33998 3.26675 1.33998 4.00008L1.33331 12.0001C1.33331 12.7334 1.93331 13.3334 2.66665 13.3334H13.3333C14.0666 13.3334 14.6666 12.7334 14.6666 12.0001V4.00008C14.6666 3.26675 14.0666 2.66675 13.3333 2.66675ZM2.66665 6.00008H9.66665V8.33341H2.66665V6.00008ZM2.66665 9.66675H9.66665V12.0001H3.33331C2.96665 12.0001 2.66665 11.7001 2.66665 11.3334V9.66675ZM12.6666 12.0001H11V6.00008H13.3333V11.3334C13.3333 11.7001 13.0333 12.0001 12.6666 12.0001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWeb }

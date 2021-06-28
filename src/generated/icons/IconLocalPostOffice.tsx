import React, { FC } from 'react'

const IconLocalPostOffice: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66663H2.66665C1.93331 2.66663 1.33331 3.26663 1.33331 3.99996V12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V3.99996C14.6666 3.26663 14.0666 2.66663 13.3333 2.66663ZM13.0666 5.49996L8.70665 8.22663C8.27331 8.49996 7.72665 8.49996 7.29331 8.22663L2.93331 5.49996C2.76665 5.39329 2.66665 5.21329 2.66665 5.01996C2.66665 4.57329 3.15331 4.30663 3.53331 4.53996L7.99998 7.33329L12.4666 4.53996C12.8466 4.30663 13.3333 4.57329 13.3333 5.01996C13.3333 5.21329 13.2333 5.39329 13.0666 5.49996Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalPostOffice }

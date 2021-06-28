import React, { FC } from 'react'

const IconSource: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 3.99996H7.99998L7.05998 3.05996C6.80665 2.80663 6.46665 2.66663 6.11331 2.66663H2.66665C1.93331 2.66663 1.33998 3.26663 1.33998 3.99996L1.33331 12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V5.33329C14.6666 4.59996 14.0666 3.99996 13.3333 3.99996ZM9.33331 10.6666H3.99998V9.33329H9.33331V10.6666ZM12 7.99996H3.99998V6.66663H12V7.99996Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSource }

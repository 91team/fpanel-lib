import React, { FC } from 'react'

const IconDuo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33331H8.00001C4.25334 1.33331 1.33334 4.43998 1.33334 8.18665C1.33334 11.6666 4.32668 14.6666 7.81334 14.6666C11.5933 14.6666 14.6667 11.7466 14.6667 7.99998V2.66665C14.6667 1.93331 14.0667 1.33331 13.3333 1.33331ZM11.3333 9.99998L9.33334 8.66665V9.99998H4.66668V5.99998H9.33334V7.33331L11.3333 5.99998V9.99998Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDuo }

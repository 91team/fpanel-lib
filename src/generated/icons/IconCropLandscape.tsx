import React, { FC } from 'react'

const IconCropLandscape: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 3.33331H3.33333C2.6 3.33331 2 3.93331 2 4.66665V11.3333C2 12.0666 2.6 12.6666 3.33333 12.6666H12.6667C13.4 12.6666 14 12.0666 14 11.3333V4.66665C14 3.93331 13.4 3.33331 12.6667 3.33331ZM12 11.3333H4C3.63333 11.3333 3.33333 11.0333 3.33333 10.6666V5.33331C3.33333 4.96665 3.63333 4.66665 4 4.66665H12C12.3667 4.66665 12.6667 4.96665 12.6667 5.33331V10.6666C12.6667 11.0333 12.3667 11.3333 12 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCropLandscape }

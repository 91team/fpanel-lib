import React, { FC } from 'react'

const IconExposurePlus1: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99999 4.66665C5.63332 4.66665 5.33332 4.96665 5.33332 5.33331V7.33331H3.33332C2.96666 7.33331 2.66666 7.63331 2.66666 7.99998C2.66666 8.36665 2.96666 8.66665 3.33332 8.66665H5.33332V10.6666C5.33332 11.0333 5.63332 11.3333 5.99999 11.3333C6.36666 11.3333 6.66666 11.0333 6.66666 10.6666V8.66665H8.66666C9.03332 8.66665 9.33332 8.36665 9.33332 7.99998C9.33332 7.63331 9.03332 7.33331 8.66666 7.33331H6.66666V5.33331C6.66666 4.96665 6.36666 4.66665 5.99999 4.66665ZM13.3333 12H12V4.91998L9.99999 5.59998V4.46665L13.1333 3.33331H13.3333V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExposurePlus1 }

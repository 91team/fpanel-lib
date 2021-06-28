import React, { FC } from 'react'

const IconRemove: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.66665H3.99999C3.63333 8.66665 3.33333 8.36665 3.33333 7.99998C3.33333 7.63331 3.63333 7.33331 3.99999 7.33331H12C12.3667 7.33331 12.6667 7.63331 12.6667 7.99998C12.6667 8.36665 12.3667 8.66665 12 8.66665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRemove }

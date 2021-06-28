import React, { FC } from 'react'

const IconKeyboardBackspace: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 7.33332H4.55334L6.47334 5.41332C6.73334 5.15332 6.73334 4.73332 6.47334 4.47332C6.21334 4.21332 5.79334 4.21332 5.53334 4.47332L2.47334 7.53332C2.21334 7.79332 2.21334 8.21332 2.47334 8.47332L5.53334 11.5333C5.79334 11.7933 6.21334 11.7933 6.47334 11.5333C6.73334 11.2733 6.73334 10.8533 6.47334 10.5933L4.55334 8.66665H13.3333C13.7 8.66665 14 8.36665 14 7.99999C14 7.63332 13.7 7.33332 13.3333 7.33332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardBackspace }

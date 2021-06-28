import React, { FC } from 'react'

const IconKeyboardCapslock: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.60667L10.5933 8.2C10.8533 8.46 11.2733 8.46 11.5333 8.2C11.7933 7.94 11.7933 7.52 11.5333 7.26L8.47333 4.2C8.21333 3.94 7.79333 3.94 7.53333 4.2L4.46667 7.26C4.20667 7.52 4.20667 7.94 4.46667 8.2C4.72667 8.46 5.14667 8.46 5.40667 8.2L8 5.60667ZM4.66667 12H11.3333C11.7 12 12 11.7 12 11.3333C12 10.9667 11.7 10.6667 11.3333 10.6667H4.66667C4.3 10.6667 4 10.9667 4 11.3333C4 11.7 4.3 12 4.66667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardCapslock }

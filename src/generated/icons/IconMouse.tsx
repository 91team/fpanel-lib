import React, { FC } from 'react'

const IconMouse: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66667 0.713318V5.99998H13.3333C13.3333 3.27998 11.3 1.03998 8.66667 0.713318ZM2.66667 9.99998C2.66667 12.9467 5.05334 15.3333 8 15.3333C10.9467 15.3333 13.3333 12.9467 13.3333 9.99998V7.33332H2.66667V9.99998ZM7.33334 0.713318C4.7 1.03998 2.66667 3.27998 2.66667 5.99998H7.33334V0.713318Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMouse }

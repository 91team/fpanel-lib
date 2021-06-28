import React, { FC } from 'react'

const IconTablet: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2.66666H1.99999C1.26666 2.66666 0.666656 3.26666 0.666656 3.99999V12C0.666656 12.7333 1.26666 13.3333 1.99999 13.3333H14C14.7333 13.3333 15.3267 12.7333 15.3267 12L15.3333 3.99999C15.3333 3.26666 14.7333 2.66666 14 2.66666ZM12.6667 12H3.33332V3.99999H12.6667V12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTablet }

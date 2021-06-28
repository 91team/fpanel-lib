import React, { FC } from 'react'

const IconPolymer: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6666 2.66663H9.99998L4.73998 11.0866L2.99998 7.99996L5.99998 2.66663H3.33331L0.333313 7.99996L3.33331 13.3333H5.99998L11.26 4.91329L13 7.99996L9.99998 13.3333H12.6666L15.6666 7.99996L12.6666 2.66663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPolymer }

import React, { FC } from 'react'

const IconSwitchRight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M10.3333 10.2534V5.74676L12.5867 8.00009L10.3333 10.2534ZM13.5267 8.47343C13.7867 8.21343 13.7867 7.79343 13.5267 7.53343L10.4667 4.47343C10.0533 4.05343 9.33333 4.34676 9.33333 4.94009V11.0534C9.33333 11.6468 10.0533 11.9468 10.4733 11.5268L13.5267 8.47343ZM6.66667 11.0601V4.94009C6.66667 4.34676 5.94667 4.04676 5.52667 4.46676L2.46667 7.52676C2.20667 7.78676 2.20667 8.20676 2.46667 8.46676L5.52667 11.5268C5.94667 11.9468 6.66667 11.6534 6.66667 11.0601Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSwitchRight }

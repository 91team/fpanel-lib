import React, { FC } from 'react'

const IconVerticalAlignBottom: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85999 8.66667H8.66666V2.66667C8.66666 2.3 8.36666 2 7.99999 2C7.63332 2 7.33332 2.3 7.33332 2.66667V8.66667H6.13999C5.83999 8.66667 5.69332 9.02667 5.90666 9.23333L7.76666 11.0933C7.89999 11.2267 8.10666 11.2267 8.23999 11.0933L10.1 9.23333C10.3067 9.02667 10.16 8.66667 9.85999 8.66667ZM2.66666 13.3333C2.66666 13.7 2.96666 14 3.33332 14H12.6667C13.0333 14 13.3333 13.7 13.3333 13.3333C13.3333 12.9667 13.0333 12.6667 12.6667 12.6667H3.33332C2.96666 12.6667 2.66666 12.9667 2.66666 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVerticalAlignBottom }

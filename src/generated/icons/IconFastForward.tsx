import React, { FC } from 'react'

const IconFastForward: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.71999 11.2599L7.56666 8.5466C7.93999 8.27993 7.93999 7.71993 7.56666 7.45993L3.71999 4.73993C3.27332 4.43327 2.66666 4.7466 2.66666 5.2866V10.7133C2.66666 11.2533 3.27332 11.5666 3.71999 11.2599ZM8.66666 5.2866V10.7133C8.66666 11.2533 9.27332 11.5666 9.71999 11.2599L13.5667 8.5466C13.94 8.27993 13.94 7.71993 13.5667 7.45993L9.71999 4.7466C9.27332 4.43327 8.66666 4.7466 8.66666 5.2866Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFastForward }

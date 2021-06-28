import React, { FC } from 'react'

const IconShortText: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33332 6H12.6667C13.0333 6 13.3333 6.3 13.3333 6.66667C13.3333 7.03333 13.0333 7.33333 12.6667 7.33333H3.33332C2.96666 7.33333 2.66666 7.03333 2.66666 6.66667C2.66666 6.3 2.96666 6 3.33332 6ZM3.33332 8.66667H8.66666C9.03332 8.66667 9.33332 8.96667 9.33332 9.33333C9.33332 9.7 9.03332 10 8.66666 10H3.33332C2.96666 10 2.66666 9.7 2.66666 9.33333C2.66666 8.96667 2.96666 8.66667 3.33332 8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconShortText }

import React, { FC } from 'react'

const IconDragHandle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 6H3.33332C2.96666 6 2.66666 6.3 2.66666 6.66667C2.66666 7.03333 2.96666 7.33333 3.33332 7.33333H12.6667C13.0333 7.33333 13.3333 7.03333 13.3333 6.66667C13.3333 6.3 13.0333 6 12.6667 6ZM3.33332 10H12.6667C13.0333 10 13.3333 9.7 13.3333 9.33333C13.3333 8.96667 13.0333 8.66667 12.6667 8.66667H3.33332C2.96666 8.66667 2.66666 8.96667 2.66666 9.33333C2.66666 9.7 2.96666 10 3.33332 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDragHandle }

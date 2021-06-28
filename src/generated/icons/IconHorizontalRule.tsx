import React, { FC } from 'react'

const IconHorizontalRule: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 8.66668H3.33334C2.96667 8.66668 2.66667 8.36668 2.66667 8.00001C2.66667 7.63334 2.96667 7.33334 3.33334 7.33334H12.6667C13.0333 7.33334 13.3333 7.63334 13.3333 8.00001C13.3333 8.36668 13.0333 8.66668 12.6667 8.66668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHorizontalRule }

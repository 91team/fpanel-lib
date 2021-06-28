import React, { FC } from 'react'

const IconSpaceBar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.66667V8.66667H4.00002V6.66667C4.00002 6.3 3.70002 6 3.33335 6C2.96669 6 2.66669 6.3 2.66669 6.66667V9.33333C2.66669 9.7 2.96669 10 3.33335 10H12.6667C13.0334 10 13.3334 9.7 13.3334 9.33333V6.66667C13.3334 6.3 13.0334 6 12.6667 6C12.3 6 12 6.3 12 6.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSpaceBar }

import React, { FC } from 'react'

const IconDone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.7999L3.66666 8.46655C3.40666 8.20655 2.99333 8.20655 2.73333 8.46655C2.47333 8.72655 2.47333 9.13988 2.73333 9.39988L5.52666 12.1932C5.78666 12.4532 6.20666 12.4532 6.46666 12.1932L13.5333 5.13322C13.7933 4.87322 13.7933 4.45988 13.5333 4.19988C13.2733 3.93988 12.86 3.93988 12.6 4.19988L6 10.7999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDone }

import React, { FC } from 'react'

const IconNorth: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.80666 6.46665C4.06666 6.72665 4.48666 6.72665 4.74666 6.46665L7.33333 3.88665V14C7.33333 14.3666 7.63333 14.6666 8 14.6666C8.36666 14.6666 8.66666 14.3666 8.66666 14V3.88665L11.2533 6.47331C11.5133 6.73331 11.9333 6.73331 12.1933 6.47331C12.4533 6.21331 12.4533 5.79331 12.1933 5.53331L8.46666 1.79998C8.20666 1.53998 7.78666 1.53998 7.52666 1.79998L3.80666 5.52665C3.54666 5.78665 3.54666 6.21331 3.80666 6.46665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNorth }

import React, { FC } from 'react'

const IconHvac: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.6667C8.67333 10.6667 9.27333 10.4067 9.74667 10H6.25333C6.72667 10.4067 7.32667 10.6667 8 10.6667Z" fill="currentColor"/>
<path d="M5.70667 9.33337H10.3C10.4733 9.03337 10.5933 8.69337 10.64 8.33337H5.37334C5.41334 8.69337 5.52667 9.03337 5.70667 9.33337Z" fill="currentColor"/>
<path d="M8 5.33337C7.32667 5.33337 6.72667 5.59337 6.25333 6.00004H9.74667C9.27333 5.59337 8.67333 5.33337 8 5.33337Z" fill="currentColor"/>
<path d="M5.70667 6.66663C5.53334 6.96663 5.41334 7.30663 5.36667 7.66663H10.6333C10.5867 7.30663 10.4733 6.96663 10.2933 6.66663H5.70667Z" fill="currentColor"/>
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM8 12C5.79333 12 4 10.2067 4 8C4 5.79333 5.79333 4 8 4C10.2067 4 12 5.79333 12 8C12 10.2067 10.2067 12 8 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHvac }

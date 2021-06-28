import React, { FC } from 'react'

const IconCropOriginal: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.04 8.54L7.47333 10.5533L6.43333 9.3C6.3 9.13333 6.04667 9.14 5.91333 9.30667L4.75333 10.7933C4.58 11.0133 4.74 11.3333 5.01333 11.3333H11C11.2733 11.3333 11.4333 11.02 11.2667 10.8L9.56667 8.54C9.44 8.36667 9.17333 8.36667 9.04 8.54Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCropOriginal }

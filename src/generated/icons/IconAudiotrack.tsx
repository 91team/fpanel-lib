import React, { FC } from 'react'

const IconAudiotrack: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 3.33333V9.03333C7.37334 8.67333 6.60001 8.53333 5.78001 8.82C4.88668 9.14 4.20001 9.93333 4.04001 10.8667C3.73334 12.6933 5.28001 14.2533 7.10001 13.9667C8.40668 13.76 9.33334 12.56 9.33334 11.2333V4.66667H10.6667C11.4 4.66667 12 4.06667 12 3.33333C12 2.6 11.4 2 10.6667 2H9.33334C8.60001 2 8.00001 2.6 8.00001 3.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAudiotrack }

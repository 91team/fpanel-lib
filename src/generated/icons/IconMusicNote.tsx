import React, { FC } from 'react'

const IconMusicNote: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.33333V9.03333C7.37333 8.67333 6.6 8.53333 5.78 8.82C4.88666 9.14 4.2 9.93333 4.04 10.8667C3.73333 12.6933 5.27999 14.2533 7.1 13.9667C8.40666 13.76 9.33333 12.56 9.33333 11.2333V4.66667H10.6667C11.4 4.66667 12 4.06667 12 3.33333C12 2.6 11.4 2 10.6667 2H9.33333C8.6 2 8 2.6 8 3.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMusicNote }

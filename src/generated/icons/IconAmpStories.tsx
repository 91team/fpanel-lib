import React, { FC } from 'react'

const IconAmpStories: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 2.66663H5.33332C4.96666 2.66663 4.66666 2.96663 4.66666 3.33329V12C4.66666 12.3666 4.96666 12.6666 5.33332 12.6666H10.6667C11.0333 12.6666 11.3333 12.3666 11.3333 12V3.33329C11.3333 2.96663 11.0333 2.66663 10.6667 2.66663Z" fill="currentColor"/>
<path d="M2.66667 4C2.3 4 2 4.3 2 4.66667V10.6667C2 11.0333 2.3 11.3333 2.66667 11.3333C3.03333 11.3333 3.33333 11.0333 3.33333 10.6667V4.66667C3.33333 4.3 3.03333 4 2.66667 4Z" fill="currentColor"/>
<path d="M13.3333 4C12.9667 4 12.6667 4.3 12.6667 4.66667V10.6667C12.6667 11.0333 12.9667 11.3333 13.3333 11.3333C13.7 11.3333 14 11.0333 14 10.6667V4.66667C14 4.3 13.7 4 13.3333 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAmpStories }

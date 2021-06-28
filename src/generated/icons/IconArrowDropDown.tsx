import React, { FC } from 'react'

const IconArrowDropDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.80666 7.80663L7.53333 9.53329C7.79333 9.79329 8.21333 9.79329 8.47333 9.53329L10.2 7.80663C10.62 7.38663 10.32 6.66663 9.72666 6.66663H6.27333C5.67999 6.66663 5.38666 7.38663 5.80666 7.80663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowDropDown }

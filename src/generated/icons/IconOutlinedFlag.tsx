import React, { FC } from 'react'

const IconOutlinedFlag: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33334 3.99996L8.85334 3.03329C8.74001 2.80663 8.50668 2.66663 8.25334 2.66663H4.00001C3.63334 2.66663 3.33334 2.96663 3.33334 3.33329V13.3333C3.33334 13.7 3.63334 14 4.00001 14C4.36668 14 4.66668 13.7 4.66668 13.3333V9.33329H8.00001L8.48001 10.3C8.59334 10.5266 8.82668 10.6666 9.07334 10.6666H12.6667C13.0333 10.6666 13.3333 10.3666 13.3333 9.99996V4.66663C13.3333 4.29996 13.0333 3.99996 12.6667 3.99996H9.33334ZM12 9.33329H9.33334L8.66668 7.99996H4.66668V3.99996H8.00001L8.66668 5.33329H12V9.33329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconOutlinedFlag }

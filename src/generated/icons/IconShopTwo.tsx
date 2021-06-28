import React, { FC } from 'react'

const IconShopTwo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33335 5.99996C0.966687 5.99996 0.666687 6.29996 0.666687 6.66663V13.3333C0.666687 14.0666 1.26669 14.6666 2.00002 14.6666H11.3334C12.0734 14.6666 12.6667 14.0733 12.6667 13.3333H2.66669C2.30002 13.3333 2.00002 13.0333 2.00002 12.6666V6.66663C2.00002 6.29996 1.70002 5.99996 1.33335 5.99996ZM12 3.33329V1.99996C12 1.26663 11.4 0.666626 10.6667 0.666626H8.00002C7.26669 0.666626 6.66669 1.26663 6.66669 1.99996V3.33329H4.66669C3.93335 3.33329 3.33335 3.93329 3.33335 4.66663V10.6666C3.33335 11.4 3.93335 12 4.66669 12H14C14.7334 12 15.3334 11.4 15.3334 10.6666V4.66663C15.3334 3.93329 14.7334 3.33329 14 3.33329H12ZM8.00002 1.99996H10.6667V3.33329H8.00002V1.99996ZM8.00002 9.34663V5.89329C8.00002 5.63996 8.27335 5.47996 8.49335 5.59996L11.2067 7.07996C11.42 7.19996 11.44 7.49996 11.24 7.63996L8.52669 9.61329C8.30669 9.77329 8.00002 9.61996 8.00002 9.34663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconShopTwo }

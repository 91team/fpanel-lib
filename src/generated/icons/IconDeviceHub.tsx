import React, { FC } from 'react'

const IconDeviceHub: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 10.6667L8.66667 8.00001V5.88001C9.56667 5.55334 10.1733 4.62001 9.95333 3.57334C9.78667 2.78667 9.13333 2.16001 8.34 2.02667C7.08667 1.82001 6 2.78001 6 4.00001C6 4.86667 6.56 5.60001 7.33333 5.88001V8.00001L4.66667 10.6667H2.66667C2.3 10.6667 2 10.9667 2 11.3333V13.3333C2 13.7 2.3 14 2.66667 14H4.66667C5.03333 14 5.33333 13.7 5.33333 13.3333V11.9667L8 9.16667L10.6667 11.9667V13.3333C10.6667 13.7 10.9667 14 11.3333 14H13.3333C13.7 14 14 13.7 14 13.3333V11.3333C14 10.9667 13.7 10.6667 13.3333 10.6667H11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDeviceHub }

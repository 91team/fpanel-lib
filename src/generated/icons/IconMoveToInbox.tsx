import React, { FC } from 'react'

const IconMoveToInbox: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.32667C2.58667 2 2 2.6 2 3.33333V12.6667C2 13.4 2.58667 14 3.32667 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 10H10.58C10.2667 10 10.0133 10.2267 9.92667 10.5333C9.69333 11.38 8.91333 12 8 12C7.08667 12 6.30667 11.38 6.07333 10.5333C5.98667 10.2267 5.73333 10 5.42 10H3.32667V4C3.32667 3.63333 3.62667 3.33333 3.99333 3.33333H12C12.3667 3.33333 12.6667 3.63333 12.6667 4V10ZM10.6667 6.66667H9.33333V4.66667H6.66667V6.66667H5.33333L7.76667 9.1C7.9 9.23333 8.10667 9.23333 8.24 9.1L10.6667 6.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMoveToInbox }

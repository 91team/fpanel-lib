import React, { FC } from 'react'

const IconMeetingRoom: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 12.6667H12.6667V3.33333C12.6667 2.96667 12.3667 2.66667 12 2.66667H9.33333C9.33333 2.3 9.03333 2 8.66667 2H4C3.63333 2 3.33333 2.3 3.33333 2.66667V12.6667H2.66667C2.3 12.6667 2 12.9667 2 13.3333C2 13.7 2.3 14 2.66667 14H8.66667C9.03333 14 9.33333 13.7 9.33333 13.3333V4H11.3333V13.3333C11.3333 13.7 11.6333 14 12 14H13.3333C13.7 14 14 13.7 14 13.3333C14 12.9667 13.7 12.6667 13.3333 12.6667ZM8 8.66667H6.66667V7.33333H8V8.66667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMeetingRoom }

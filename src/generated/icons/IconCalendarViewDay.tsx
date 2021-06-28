import React, { FC } from 'react'

const IconCalendarViewDay: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66667 11.3333H13.3333C13.7 11.3333 14 11.6333 14 12C14 12.3667 13.7 12.6667 13.3333 12.6667H2.66667C2.3 12.6667 2 12.3667 2 12C2 11.6333 2.3 11.3333 2.66667 11.3333ZM2.66667 6.66667H13.3333C13.7 6.66667 14 6.96667 14 7.33333V9.33333C14 9.7 13.7 10 13.3333 10H2.66667C2.3 10 2 9.7 2 9.33333V7.33333C2 6.96667 2.3 6.66667 2.66667 6.66667ZM2.66667 4H13.3333C13.7 4 14 4.3 14 4.66667C14 5.03333 13.7 5.33333 13.3333 5.33333H2.66667C2.3 5.33333 2 5.03333 2 4.66667C2 4.3 2.3 4 2.66667 4Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCalendarViewDay }

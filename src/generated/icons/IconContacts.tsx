import React, { FC } from 'react'

const IconContacts: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 0H3.33333C2.96666 0 2.66666 0.3 2.66666 0.666667C2.66666 1.03333 2.96666 1.33333 3.33333 1.33333H12.6667C13.0333 1.33333 13.3333 1.03333 13.3333 0.666667C13.3333 0.3 13.0333 0 12.6667 0ZM3.33333 16H12.6667C13.0333 16 13.3333 15.7 13.3333 15.3333C13.3333 14.9667 13.0333 14.6667 12.6667 14.6667H3.33333C2.96666 14.6667 2.66666 14.9667 2.66666 15.3333C2.66666 15.7 2.96666 16 3.33333 16ZM13.3333 2.66667H2.66666C1.93333 2.66667 1.33333 3.26667 1.33333 4V12C1.33333 12.7333 1.93333 13.3333 2.66666 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V4C14.6667 3.26667 14.0667 2.66667 13.3333 2.66667ZM8 4.5C8.82666 4.5 9.5 5.17333 9.5 6C9.5 6.82667 8.82666 7.5 8 7.5C7.17333 7.5 6.5 6.82667 6.5 6C6.5 5.17333 7.17333 4.5 8 4.5ZM11.3333 11.3333H4.66666V10.3333C4.66666 9.22 6.88666 8.66667 8 8.66667C9.11333 8.66667 11.3333 9.22 11.3333 10.3333V11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconContacts }

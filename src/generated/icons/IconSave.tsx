import React, { FC } from 'react'

const IconSave: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7267 2.39333C11.4733 2.14 11.1333 2 10.78 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V5.22C14 4.86667 13.86 4.52667 13.6067 4.28L11.7267 2.39333ZM8 12.6667C6.89333 12.6667 6 11.7733 6 10.6667C6 9.56 6.89333 8.66667 8 8.66667C9.10667 8.66667 10 9.56 10 10.6667C10 11.7733 9.10667 12.6667 8 12.6667ZM8.66667 6H4.66667C3.93333 6 3.33333 5.4 3.33333 4.66667C3.33333 3.93333 3.93333 3.33333 4.66667 3.33333H8.66667C9.4 3.33333 10 3.93333 10 4.66667C10 5.4 9.4 6 8.66667 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSave }

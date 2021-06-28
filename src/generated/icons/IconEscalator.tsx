import React, { FC } from 'react'

const IconEscalator: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM11.3333 6H10.2L7.06 11.66C6.94 11.8667 6.71333 12 6.47333 12H4.66667C4.11333 12 3.66667 11.5533 3.66667 11C3.66667 10.4467 4.11333 10 4.66667 10H5.8L8.94 4.34C9.06 4.13333 9.28667 4 9.52667 4H11.3333C11.8867 4 12.3333 4.44667 12.3333 5C12.3333 5.55333 11.8867 6 11.3333 6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEscalator }

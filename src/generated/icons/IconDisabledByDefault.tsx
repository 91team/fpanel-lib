import React, { FC } from 'react'

const IconDisabledByDefault: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333ZM10.8667 10.86C10.6067 11.12 10.1867 11.12 9.92667 10.86L8 8.94L6.07333 10.8667C5.81333 11.1267 5.39333 11.1267 5.13333 10.8667C4.87333 10.6067 4.87333 10.1867 5.13333 9.92667L7.06 8L5.13333 6.07333C4.87333 5.81333 4.87333 5.39333 5.13333 5.13333C5.39333 4.87333 5.81333 4.87333 6.07333 5.13333L8 7.06L9.92667 5.14C10.1867 4.88 10.6067 4.88 10.8667 5.14C11.1267 5.4 11.1267 5.82 10.8667 6.08L8.94 8L10.8667 9.92C11.12 10.18 11.12 10.6067 10.8667 10.86Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDisabledByDefault }

import React, { FC } from 'react'

const IconLocalHospital: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.6 2 2.00667 2.6 2.00667 3.33333L2 12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM11.3333 9.33333H9.33333V11.3333C9.33333 11.7 9.03333 12 8.66667 12H7.33333C6.96667 12 6.66667 11.7 6.66667 11.3333V9.33333H4.66667C4.3 9.33333 4 9.03333 4 8.66667V7.33333C4 6.96667 4.3 6.66667 4.66667 6.66667H6.66667V4.66667C6.66667 4.3 6.96667 4 7.33333 4H8.66667C9.03333 4 9.33333 4.3 9.33333 4.66667V6.66667H11.3333C11.7 6.66667 12 6.96667 12 7.33333V8.66667C12 9.03333 11.7 9.33333 11.3333 9.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalHospital }

import React, { FC } from 'react'

const IconLooks4: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M12.6933 2H3.36001C2.62667 2 2.02667 2.6 2.02667 3.33333V12.6667C2.02667 13.4 2.62667 14 3.36001 14H12.6933C13.4267 14 14.0267 13.4 14.0267 12.6667V3.33333C14.0267 2.6 13.4267 2 12.6933 2ZM9.36001 11.3333C8.99334 11.3333 8.69334 11.0333 8.69334 10.6667V8.66667H6.69334C6.32667 8.66667 6.02667 8.36667 6.02667 8V5.33333C6.02667 4.96667 6.32667 4.66667 6.69334 4.66667C7.06001 4.66667 7.36001 4.96667 7.36001 5.33333V7.33333H8.69334V5.33333C8.69334 4.96667 8.99334 4.66667 9.36001 4.66667C9.72667 4.66667 10.0267 4.96667 10.0267 5.33333V10.6667C10.0267 11.0333 9.72667 11.3333 9.36001 11.3333Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooks4 }

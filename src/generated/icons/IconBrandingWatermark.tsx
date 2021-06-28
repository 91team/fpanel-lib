import React, { FC } from 'react'

const IconBrandingWatermark: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H1.99999C1.26666 2 0.666656 2.6 0.666656 3.33333V12.6667C0.666656 13.4 1.26666 14 1.99999 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM13.3333 12.6667H8.66666C8.29999 12.6667 7.99999 12.3667 7.99999 12V9.33333C7.99999 8.96667 8.29999 8.66667 8.66666 8.66667H13.3333C13.7 8.66667 14 8.96667 14 9.33333V12C14 12.3667 13.7 12.6667 13.3333 12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrandingWatermark }

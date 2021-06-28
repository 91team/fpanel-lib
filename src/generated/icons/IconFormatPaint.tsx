import React, { FC } from 'react'

const IconFormatPaint: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.66668V2.00001C12 1.63334 11.7 1.33334 11.3333 1.33334H3.33334C2.96667 1.33334 2.66667 1.63334 2.66667 2.00001V4.66668C2.66667 5.03334 2.96667 5.33334 3.33334 5.33334H11.3333C11.7 5.33334 12 5.03334 12 4.66668V4.00001H12.6667V6.66668H6.66667C6.3 6.66668 6 6.96668 6 7.33334V14C6 14.3667 6.3 14.6667 6.66667 14.6667H8C8.36667 14.6667 8.66667 14.3667 8.66667 14V8.00001H13.3333C13.7 8.00001 14 7.70001 14 7.33334V3.33334C14 2.96668 13.7 2.66668 13.3333 2.66668H12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFormatPaint }

import React, { FC } from 'react'

const IconTableChart: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 6.68H10V14H6.66667V6.68ZM11.3333 14H13.3333C14.0667 14 14.6667 13.4 14.6667 12.6667V6.66667H11.3333V14ZM13.3333 2H3.33333C2.6 2 2 2.6 2 3.33333V5.33333H14.6667V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM2 12.6667C2 13.4 2.6 14 3.33333 14H5.33333V6.66667H2V12.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTableChart }

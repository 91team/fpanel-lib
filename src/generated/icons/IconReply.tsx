import React, { FC } from 'react'

const IconReply: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 5.99997V4.93997C6.66667 4.34664 5.94667 4.04664 5.52667 4.46664L2.46667 7.52664C2.20667 7.78664 2.20667 8.20664 2.46667 8.46664L5.52667 11.5266C5.94667 11.9466 6.66667 11.6533 6.66667 11.06V9.9333C10 9.9333 12.3333 11 14 13.3333C13.3333 9.99997 11.3333 6.66664 6.66667 5.99997Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconReply }

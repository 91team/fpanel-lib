import React, { FC } from 'react'

const IconChatBubble: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33331H2.66668C1.93334 1.33331 1.33334 1.93331 1.33334 2.66665V14.6666L4.00001 12H13.3333C14.0667 12 14.6667 11.4 14.6667 10.6666V2.66665C14.6667 1.93331 14.0667 1.33331 13.3333 1.33331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconChatBubble }

import React, { FC } from 'react'

const IconPayment: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2.66663H2.66668C1.92668 2.66663 1.34001 3.25996 1.34001 3.99996L1.33334 12C1.33334 12.74 1.92668 13.3333 2.66668 13.3333H13.3333C14.0733 13.3333 14.6667 12.74 14.6667 12V3.99996C14.6667 3.25996 14.0733 2.66663 13.3333 2.66663ZM12.6667 12H3.33334C2.96668 12 2.66668 11.7 2.66668 11.3333V7.99996H13.3333V11.3333C13.3333 11.7 13.0333 12 12.6667 12ZM13.3333 5.33329H2.66668V4.66663C2.66668 4.29996 2.96668 3.99996 3.33334 3.99996H12.6667C13.0333 3.99996 13.3333 4.29996 13.3333 4.66663V5.33329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPayment }

import React, { FC } from 'react'

const IconCardMembership: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33325H2.66668C1.92668 1.33325 1.33334 1.92659 1.33334 2.66659V9.99992C1.33334 10.7399 1.92668 11.3333 2.66668 11.3333H5.33334V14.6666L8.00001 13.3333L10.6667 14.6666V11.3333H13.3333C14.0733 11.3333 14.6667 10.7399 14.6667 9.99992V2.66659C14.6667 1.92659 14.0733 1.33325 13.3333 1.33325ZM13.3333 9.99992H2.66668V8.66659H13.3333V9.99992ZM13.3333 6.66659H2.66668V3.33325C2.66668 2.96659 2.96668 2.66659 3.33334 2.66659H12.6667C13.0333 2.66659 13.3333 2.96659 13.3333 3.33325V6.66659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCardMembership }

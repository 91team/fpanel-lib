import React, { FC } from 'react'

const IconChangeHistory: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 5.17997L12.26 12H3.73999L7.99999 5.17997ZM7.43332 3.5733L1.96666 12.3133C1.69333 12.76 2.01333 13.3333 2.53333 13.3333H13.4667C13.9933 13.3333 14.3067 12.76 14.0333 12.3133L8.56666 3.5733C8.30666 3.1533 7.69332 3.1533 7.43332 3.5733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconChangeHistory }

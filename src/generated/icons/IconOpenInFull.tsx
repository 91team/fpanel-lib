import React, { FC } from 'react'

const IconOpenInFull: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5.72667V2.66667C14 2.3 13.7 2 13.3333 2H10.2733C9.68 2 9.38 2.72 9.8 3.14L10.86 4.2L4.19333 10.8667L3.13333 9.80667C2.72 9.38667 2 9.68 2 10.2733V13.3333C2 13.7 2.3 14 2.66667 14H5.72667C6.32 14 6.62 13.28 6.2 12.86L5.14 11.8L11.8067 5.13333L12.8667 6.19333C13.28 6.61333 14 6.32 14 5.72667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconOpenInFull }

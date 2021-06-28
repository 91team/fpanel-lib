import React, { FC } from 'react'

const IconCallMissedOutgoing: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.46667 6.07335L7.52667 11.1334C7.78667 11.3934 8.20667 11.3934 8.46667 11.1334L12.6667 6.93335V9.33335C12.6667 9.70002 12.9667 10 13.3333 10C13.7 10 14 9.70002 14 9.33335V5.33335C14 4.96669 13.7 4.66669 13.3333 4.66669H9.33334C8.96667 4.66669 8.66667 4.96669 8.66667 5.33335C8.66667 5.70002 8.96667 6.00002 9.33334 6.00002H11.7267L8.00001 9.72669L3.40667 5.13335C3.14667 4.87335 2.72667 4.87335 2.46667 5.13335C2.21334 5.39335 2.21334 5.82002 2.46667 6.07335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallMissedOutgoing }

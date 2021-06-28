import React, { FC } from 'react'

const IconCallMissed: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5933 5.13335L8 9.72669L4.27333 6.00002H6.66667C7.03333 6.00002 7.33333 5.70002 7.33333 5.33335C7.33333 4.96669 7.03333 4.66669 6.66667 4.66669H2.66667C2.3 4.66669 2 4.96669 2 5.33335V9.33335C2 9.70002 2.3 10 2.66667 10C3.03333 10 3.33333 9.70002 3.33333 9.33335V6.94002L7.52667 11.1334C7.78667 11.3934 8.20667 11.3934 8.46667 11.1334L13.5267 6.07335C13.7867 5.81335 13.7867 5.39335 13.5267 5.13335C13.2733 4.88002 12.8467 4.88002 12.5933 5.13335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallMissed }

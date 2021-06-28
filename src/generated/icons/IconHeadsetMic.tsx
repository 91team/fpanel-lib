import React, { FC } from 'react'

const IconHeadsetMic: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6 0.679994C4.41333 0.88666 2 3.67999 2 6.87333V11.3333C2 12.44 2.89333 13.3333 4 13.3333H4.66667C5.4 13.3333 6 12.7333 6 12V9.33333C6 8.59999 5.4 7.99999 4.66667 7.99999H3.33333V6.85999C3.33333 4.29999 5.30667 2.07333 7.86 1.99999C10.5067 1.92666 12.6667 4.03999 12.6667 6.66666V7.99999H11.3333C10.6 7.99999 10 8.59999 10 9.33333V12C10 12.7333 10.6 13.3333 11.3333 13.3333H12.6667V14H8.66667C8.3 14 8 14.3 8 14.6667C8 15.0333 8.3 15.3333 8.66667 15.3333H12C13.1067 15.3333 14 14.44 14 13.3333V6.66666C14 3.21999 11.0933 0.453327 7.6 0.679994Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHeadsetMic }

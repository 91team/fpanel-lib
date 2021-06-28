import React, { FC } from 'react'

const IconSportsVolleyball: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00001 2.67334C2.38668 3.89334 1.33334 5.82001 1.33334 8.00001C1.33334 8.97334 1.54668 9.90001 1.92668 10.74L4.00001 9.54001V2.67334Z" fill="currentColor"/>
<path d="M7.33334 7.61337V1.3667C6.62668 1.44003 5.95334 1.62003 5.33334 1.89337V8.77337L7.33334 7.61337Z" fill="currentColor"/>
<path d="M8.00002 8.7666L2.59335 11.8866C3.00002 12.4466 3.48669 12.9466 4.04669 13.3533L10 9.9266L8.00002 8.7666Z" fill="currentColor"/>
<path d="M8.66669 5.30664V7.61331L14.0734 10.7333C14.3534 10.1133 14.54 9.44664 14.62 8.74664L8.66669 5.30664Z" fill="currentColor"/>
<path d="M5.38 14.1334C6.18667 14.4734 7.06667 14.6667 8.00001 14.6667C10.2267 14.6667 12.1933 13.5667 13.4067 11.8934L11.3333 10.6934L5.38 14.1334Z" fill="currentColor"/>
<path d="M14.6134 7.2067C14.2467 4.12003 11.7734 1.67337 8.66669 1.3667V3.7667L14.6134 7.2067Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsVolleyball }

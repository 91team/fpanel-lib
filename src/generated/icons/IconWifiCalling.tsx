import React, { FC } from 'react'

const IconWifiCalling: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 3.3C14.5267 3.18667 13.1133 2 11 2C8.87999 2 7.47333 3.18667 7.33333 3.3L11 8L14.6667 3.3Z" fill="currentColor"/>
<path d="M12.8 10.1867L11.1067 9.99332C10.7 9.94666 10.3 10.0867 10.0133 10.3733L8.78667 11.6C6.9 10.64 5.35333 9.09999 4.39333 7.20666L5.62667 5.97332C5.91333 5.68666 6.05333 5.27999 6.00667 4.87999L5.81333 3.19999C5.73333 2.52666 5.16667 2.01999 4.48667 2.01999H3.33333C2.58 2.01999 1.95333 2.64666 2 3.39999C2.35333 9.09332 6.90667 13.6467 12.6 14C13.3533 14.0467 13.98 13.42 13.98 12.6667V11.5133C13.98 10.8333 13.4733 10.2667 12.8 10.1867Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWifiCalling }

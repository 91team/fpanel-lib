import React, { FC } from 'react'

const IconCompassCalibration: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 14C9.47275 14 10.6667 12.8061 10.6667 11.3334C10.6667 9.86059 9.47275 8.66669 7.99999 8.66669C6.52724 8.66669 5.33333 9.86059 5.33333 11.3334C5.33333 12.8061 6.52724 14 7.99999 14Z" fill="currentColor"/>
<path d="M7.99999 2C5.65999 2 3.51999 2.86 1.86666 4.27333C1.57333 4.52667 1.54666 4.98 1.82666 5.26L4.22666 7.66C4.46666 7.9 4.83999 7.92 5.10666 7.71333C5.90666 7.08667 6.91333 6.71333 7.99999 6.71333C9.09333 6.71333 10.0933 7.08667 10.8933 7.70667C11.16 7.91333 11.5333 7.89333 11.7667 7.65333L14.1667 5.25333C14.4467 4.97333 14.42 4.52 14.12 4.26667C12.48 2.85333 10.34 2 7.99999 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCompassCalibration }

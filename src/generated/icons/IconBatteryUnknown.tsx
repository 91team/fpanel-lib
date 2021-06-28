import React, { FC } from 'react'

const IconBatteryUnknown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4467 2.66671H9.33334V2.00004C9.33334 1.63337 9.03334 1.33337 8.66667 1.33337H7.33334C6.96667 1.33337 6.66667 1.63337 6.66667 2.00004V2.66671H5.55334C5.06667 2.66671 4.66667 3.06671 4.66667 3.55337V13.7734C4.66667 14.2667 5.06667 14.6667 5.56001 14.6667H10.44C10.9333 14.6667 11.3333 14.2667 11.3333 13.78V3.55337C11.3333 3.06671 10.9333 2.66671 10.4467 2.66671ZM8.66667 12H7.33334V10.6667H8.66667V12ZM9.53334 8.46004C9.53334 8.46004 9.28 8.74004 9.08667 8.93337C8.99334 9.02671 8.90667 9.14004 8.82667 9.24671L8.76667 9.34671C8.71334 9.42671 8.67334 9.51337 8.64 9.59337C8.58 9.74004 8.53334 9.88004 8.53334 10H7.46667C7.46667 9.72004 7.54667 9.46671 7.66 9.24671C7.7 9.17337 7.74667 9.10671 7.79334 9.04004C7.81334 9.00671 7.83334 8.96671 7.86 8.93337C7.93334 8.84004 8.01334 8.74671 8.08667 8.66671L8.70667 8.04004C8.88667 7.86004 9 7.60671 9 7.33337C9 6.78004 8.55334 6.33337 8 6.33337C7.56667 6.33337 7.19334 6.60671 7.06 6.99337C6.98667 7.20004 6.8 7.33337 6.58667 7.33337C6.24001 7.33337 6.00001 6.98671 6.11334 6.66004C6.39334 5.88671 7.12667 5.33337 8 5.33337C9.10667 5.33337 10 6.22671 10 7.33337C10 7.77337 9.82 8.17337 9.53334 8.46004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBatteryUnknown }

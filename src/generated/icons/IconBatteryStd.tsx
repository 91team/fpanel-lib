import React, { FC } from 'react'

const IconBatteryStd: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4467 2.66671H9.33334V2.00004C9.33334 1.63337 9.03334 1.33337 8.66667 1.33337H7.33334C6.96667 1.33337 6.66667 1.63337 6.66667 2.00004V2.66671H5.55334C5.06667 2.66671 4.66667 3.06671 4.66667 3.55337V13.7734C4.66667 14.2667 5.06667 14.6667 5.56001 14.6667H10.44C10.9333 14.6667 11.3333 14.2667 11.3333 13.78V3.55337C11.3333 3.06671 10.9333 2.66671 10.4467 2.66671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBatteryStd }

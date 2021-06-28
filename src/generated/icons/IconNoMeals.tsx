import React, { FC } from 'react'

const IconNoMeals: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12.1134L12.6667 10.78V9.33337H12C11.2667 9.33337 10.6667 8.73337 10.6667 8.00004V4.00004C10.6667 3.00671 11.7334 1.78671 13.1734 1.43337C13.5934 1.33337 14 1.65337 14 2.08671V12.1134ZM14.1267 15.0734C13.8667 15.3334 13.4467 15.3334 13.1867 15.0734L6.68002 8.56671C6.46002 8.62671 6.24002 8.66671 6.00002 8.66671V14C6.00002 14.3667 5.70002 14.6667 5.33336 14.6667C4.96669 14.6667 4.66669 14.3667 4.66669 14V8.66671C3.19336 8.66671 2.00002 7.47337 2.00002 6.00004V3.88671L0.926689 2.81337C0.666689 2.55337 0.666689 2.13337 0.926689 1.87337C1.18669 1.61337 1.60669 1.61337 1.86669 1.87337L14.12 14.1267C14.3867 14.3867 14.3867 14.8134 14.1267 15.0734ZM4.11336 6.00004L3.33336 5.22004V6.00004H4.11336ZM8.66669 6.00004V2.00004C8.66669 1.63337 8.36669 1.33337 8.00002 1.33337C7.63336 1.33337 7.33336 1.63337 7.33336 2.00004V5.44671L8.56669 6.68004C8.62669 6.46004 8.66669 6.24004 8.66669 6.00004ZM6.00002 2.00004C6.00002 1.63337 5.70002 1.33337 5.33336 1.33337C4.96669 1.33337 4.66669 1.63337 4.66669 2.00004V2.78004L6.00002 4.11337V2.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNoMeals }

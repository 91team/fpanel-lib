import React, { FC } from 'react'

const IconGolfCourse: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14C13.5523 14 14 13.5523 14 13C14 12.4477 13.5523 12 13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14Z" fill="currentColor"/>
<path d="M7.33335 12.0199V5.98654L10.1467 4.5532C10.6334 4.30654 10.6334 3.59987 10.14 3.35987L6.96669 1.80654C6.52002 1.58654 6.00002 1.90654 6.00002 2.39987V12.6665C6.00002 13.0332 5.70002 13.3332 5.33335 13.3332C4.96669 13.3332 4.66669 13.0332 4.66669 12.6665V12.1799C3.47335 12.4132 2.66669 12.8399 2.66669 13.3332C2.66669 14.0665 4.46002 14.6665 6.66669 14.6665C8.87335 14.6665 10.6667 14.0665 10.6667 13.3332C10.6667 12.6732 9.22669 12.1265 7.33335 12.0199Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGolfCourse }

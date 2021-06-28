import React, { FC } from 'react'

const IconFlashOn: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66669 2.00004V8.00004C4.66669 8.36671 4.96669 8.66671 5.33335 8.66671H6.66669V13.4334C6.66669 13.7734 7.11335 13.8934 7.28669 13.6L10.7467 7.66671C11.0067 7.22004 10.6867 6.66671 10.1734 6.66671H8.66669L10.3267 2.23337C10.4934 1.80004 10.1734 1.33337 9.70669 1.33337H5.33335C4.96669 1.33337 4.66669 1.63337 4.66669 2.00004Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFlashOn }

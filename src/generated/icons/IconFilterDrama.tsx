import React, { FC } from 'react'

const IconFilterDrama: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69335C12.4467 4.39335 10.4267 2.66669 8 2.66669C6.07333 2.66669 4.40667 3.76002 3.57333 5.36002C1.56667 5.57335 0 7.26669 0 9.33335C0 11.54 1.79333 13.3334 4 13.3334H12.6667C14.5067 13.3334 16 11.84 16 10C16 8.24002 14.6333 6.81335 12.9 6.69335ZM12.6667 12H4.11333C2.72 12 1.48 10.98 1.34667 9.59335C1.19333 8.00669 2.44 6.66669 4 6.66669C5.28 6.66669 6.35333 7.57335 6.60667 8.78002C6.67333 9.10002 6.94 9.33335 7.26 9.33335C7.66667 9.33335 8 8.96669 7.92 8.56669C7.63333 7.07335 6.51333 5.88002 5.06 5.48002C5.79333 4.50669 6.98667 3.90002 8.32 4.01335C10.24 4.18002 11.66 5.89335 11.66 7.82002V8.00002H12.5733C13.54 8.00002 14.4333 8.64669 14.62 9.60002C14.88 10.8734 13.9 12 12.6667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFilterDrama }

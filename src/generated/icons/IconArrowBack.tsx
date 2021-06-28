import React, { FC } from 'react'

const IconArrowBack: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 7.33335H5.22001L8.47334 4.08002C8.73334 3.82002 8.73334 3.39335 8.47334 3.13335C8.21334 2.87335 7.79334 2.87335 7.53334 3.13335L3.14001 7.52669C2.88001 7.78669 2.88001 8.20669 3.14001 8.46669L7.53334 12.86C7.79334 13.12 8.21334 13.12 8.47334 12.86C8.73334 12.6 8.73334 12.18 8.47334 11.92L5.22001 8.66669H12.6667C13.0333 8.66669 13.3333 8.36669 13.3333 8.00002C13.3333 7.63335 13.0333 7.33335 12.6667 7.33335Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowBack }

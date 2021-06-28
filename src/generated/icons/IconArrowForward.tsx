import React, { FC } from 'react'

const IconArrowForward: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33334 8.66669H10.78L7.52667 11.92C7.26667 12.18 7.26667 12.6067 7.52667 12.8667C7.78667 13.1267 8.20667 13.1267 8.46667 12.8667L12.86 8.47335C13.12 8.21335 13.12 7.79335 12.86 7.53335L8.47334 3.13335C8.21334 2.87335 7.79334 2.87335 7.53334 3.13335C7.27334 3.39335 7.27334 3.81335 7.53334 4.07335L10.78 7.33335H3.33334C2.96667 7.33335 2.66667 7.63335 2.66667 8.00002C2.66667 8.36669 2.96667 8.66669 3.33334 8.66669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowForward }

import React, { FC } from 'react'

const IconChevronLeft: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.80666 4.47332C9.54666 4.21332 9.12666 4.21332 8.86666 4.47332L5.80666 7.53332C5.54666 7.79332 5.54666 8.21332 5.80666 8.47332L8.86666 11.5333C9.12666 11.7933 9.54666 11.7933 9.80666 11.5333C10.0667 11.2733 10.0667 10.8533 9.80666 10.5933L7.22 7.99999L9.80666 5.41332C10.0667 5.15332 10.06 4.72665 9.80666 4.47332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconChevronLeft }

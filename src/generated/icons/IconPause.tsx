import React, { FC } from 'react'

const IconPause: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 12.6666C6.06667 12.6666 6.66667 12.0666 6.66667 11.3333V4.66659C6.66667 3.93325 6.06667 3.33325 5.33333 3.33325C4.6 3.33325 4 3.93325 4 4.66659V11.3333C4 12.0666 4.6 12.6666 5.33333 12.6666ZM9.33333 4.66659V11.3333C9.33333 12.0666 9.93333 12.6666 10.6667 12.6666C11.4 12.6666 12 12.0666 12 11.3333V4.66659C12 3.93325 11.4 3.33325 10.6667 3.33325C9.93333 3.33325 9.33333 3.93325 9.33333 4.66659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPause }

import React, { FC } from 'react'

const IconHourglassFull: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2.66659V4.77992C4 5.13325 4.14 5.47325 4.39333 5.72659L6.66667 7.99992L4.38667 10.2799C4.14 10.5333 4 10.8733 4 11.2266V13.3333C4 14.0666 4.6 14.6666 5.33333 14.6666H10.6667C11.4 14.6666 12 14.0666 12 13.3333V11.2266C12 10.8733 11.86 10.5333 11.6133 10.2866L9.33333 7.99992L11.6067 5.73325C11.86 5.47992 12 5.13992 12 4.78659V2.66659C12 1.93325 11.4 1.33325 10.6667 1.33325H5.33333C4.6 1.33325 4 1.93325 4 2.66659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHourglassFull }

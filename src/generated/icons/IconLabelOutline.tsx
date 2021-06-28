import React, { FC } from 'react'

const IconLabelOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7533 3.89325C11.5133 3.55325 11.1133 3.33325 10.6667 3.33325L3.33333 3.33992C2.6 3.33992 2 3.93325 2 4.66659V11.3333C2 12.0666 2.6 12.6599 3.33333 12.6599L10.6667 12.6666C11.1133 12.6666 11.5133 12.4466 11.7533 12.1066L14.3933 8.38659C14.56 8.15325 14.56 7.84659 14.3933 7.61325L11.7533 3.89325ZM10.6667 11.3333H4C3.63333 11.3333 3.33333 11.0333 3.33333 10.6666V5.33325C3.33333 4.96659 3.63333 4.66659 4 4.66659H10.6667L13.0333 7.99992L10.6667 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLabelOutline }

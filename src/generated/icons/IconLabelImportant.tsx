import React, { FC } from 'react'

const IconLabelImportant: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.96 12.6599H10C10.4333 12.6599 10.84 12.4533 11.0867 12.0999L13.72 8.38659C13.8867 8.15325 13.8867 7.84659 13.72 7.61325L11.08 3.89325C10.84 3.53992 10.4333 3.33325 10 3.33325H3.96C3.42 3.33325 3.10667 3.95325 3.42 4.39325L6 7.99992L3.42 11.6066C3.10667 12.0466 3.42 12.6599 3.96 12.6599Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLabelImportant }

import React, { FC } from 'react'

const IconLabelImportantOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99997 12.6666H3.21997C2.6933 12.6666 2.3733 12.0799 2.65997 11.6399L4.99997 7.99992L2.65997 4.35992C2.3733 3.91992 2.6933 3.33325 3.21997 3.33325H9.99997C10.4333 3.33325 10.84 3.53992 11.0866 3.89325L13.7266 7.61325C13.8933 7.84659 13.8933 8.15325 13.7266 8.38659L11.0866 12.1066C10.84 12.4533 10.4333 12.6666 9.99997 12.6666ZM4.3333 11.3333H9.99997L12.3333 7.99992L9.99997 4.66659H4.3333L6.66664 7.99992L4.3333 11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLabelImportantOutline }

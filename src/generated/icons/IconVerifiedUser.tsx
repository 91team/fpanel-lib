import React, { FC } from 'react'

const IconVerifiedUser: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46 0.906626L2.79333 2.97996C2.31333 3.19329 2 3.67329 2 4.19996V7.33329C2 11.0333 4.56 14.4933 8 15.3333C11.44 14.4933 14 11.0333 14 7.33329V4.19996C14 3.67329 13.6867 3.19329 13.2067 2.97996L8.54 0.906626C8.2 0.753293 7.8 0.753293 7.46 0.906626ZM6.19333 10.86L4.46667 9.13329C4.20667 8.87329 4.20667 8.45329 4.46667 8.19329C4.72667 7.93329 5.14667 7.93329 5.40667 8.19329L6.66667 9.44663L10.5867 5.52663C10.8467 5.26663 11.2667 5.26663 11.5267 5.52663C11.7867 5.78663 11.7867 6.20663 11.5267 6.46663L7.13333 10.86C6.88 11.12 6.45333 11.12 6.19333 10.86Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVerifiedUser }

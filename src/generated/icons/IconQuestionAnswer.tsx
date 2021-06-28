import React, { FC } from 'react'

const IconQuestionAnswer: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4.00004H12.6666V9.33337C12.6666 9.70004 12.3666 10 12 10H3.99998V10.6667C3.99998 11.4 4.59998 12 5.33331 12H12L14.6666 14.6667V5.33337C14.6666 4.60004 14.0666 4.00004 13.3333 4.00004ZM11.3333 7.33337V2.66671C11.3333 1.93337 10.7333 1.33337 9.99998 1.33337H2.66665C1.93331 1.33337 1.33331 1.93337 1.33331 2.66671V11.3334L3.99998 8.66671H9.99998C10.7333 8.66671 11.3333 8.06671 11.3333 7.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconQuestionAnswer }

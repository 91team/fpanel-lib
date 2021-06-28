import React, { FC } from 'react'

const IconPlace: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99999 8.00004C8.73332 8.00004 9.33332 7.40004 9.33332 6.66671C9.33332 5.93337 8.73332 5.33337 7.99999 5.33337C7.26666 5.33337 6.66666 5.93337 6.66666 6.66671C6.66666 7.40004 7.26666 8.00004 7.99999 8.00004ZM7.99999 1.33337C10.8 1.33337 13.3333 3.48004 13.3333 6.80004C13.3333 8.92004 11.7 11.4134 8.43999 14.2867C8.18666 14.5067 7.80666 14.5067 7.55332 14.2867C4.29999 11.4134 2.66666 8.92004 2.66666 6.80004C2.66666 3.48004 5.19999 1.33337 7.99999 1.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPlace }

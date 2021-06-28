import React, { FC } from 'react'

const IconBrush: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66665 9.33335C3.55998 9.33335 2.66665 10.2267 2.66665 11.3334C2.66665 12.2067 1.89331 12.6667 1.33331 12.6667C1.94665 13.48 2.99331 14 3.99998 14C5.47331 14 6.66665 12.8067 6.66665 11.3334C6.66665 10.2267 5.77331 9.33335 4.66665 9.33335ZM13.8066 3.08669L12.9133 2.19335C12.6533 1.93335 12.2333 1.93335 11.9733 2.19335L5.99998 8.16669L7.83331 10L13.8066 4.02669C14.0666 3.76669 14.0666 3.34669 13.8066 3.08669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBrush }

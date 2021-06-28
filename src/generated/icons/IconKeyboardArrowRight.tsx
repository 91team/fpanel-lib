import React, { FC } from 'react'

const IconKeyboardArrowRight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.19335 10.5867L8.78002 7.99999L6.19335 5.41332C5.93335 5.15332 5.93335 4.73332 6.19335 4.47332C6.45335 4.21332 6.87335 4.21332 7.13335 4.47332L10.1934 7.53332C10.4534 7.79332 10.4534 8.21332 10.1934 8.47332L7.13335 11.5333C6.87335 11.7933 6.45335 11.7933 6.19335 11.5333C5.94002 11.2733 5.93335 10.8467 6.19335 10.5867Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconKeyboardArrowRight }

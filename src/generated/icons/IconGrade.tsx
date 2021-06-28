import React, { FC } from 'react'

const IconGrade: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00002 11.5133L11.4467 13.5933C11.7 13.7466 12.0134 13.52 11.9467 13.2333L11.0333 9.31331L14.0734 6.67998C14.2934 6.48665 14.18 6.11998 13.88 6.09331L9.87335 5.75331L8.30668 2.05998C8.19335 1.78665 7.80668 1.78665 7.69335 2.05998L6.12668 5.75331L2.12002 6.09331C1.82668 6.11998 1.70668 6.48665 1.93335 6.67998L4.97335 9.31331L4.06002 13.2333C3.99335 13.52 4.30668 13.7466 4.56002 13.5933L8.00002 11.5133Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconGrade }

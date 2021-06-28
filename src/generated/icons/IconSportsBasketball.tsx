import React, { FC } from 'react'

const IconSportsBasketball: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3933 7.33324H14.6333C14.5267 6.2599 14.16 5.2599 13.6067 4.3999C12.4533 4.95324 11.6133 6.03324 11.3933 7.33324Z" fill="currentColor"/>
<path d="M4.60667 7.33324C4.38667 6.03324 3.54667 4.95324 2.39334 4.3999C1.84 5.2599 1.47334 6.2599 1.36667 7.33324H4.60667Z" fill="currentColor"/>
<path d="M10.0467 7.33337C10.26 5.6067 11.3 4.14003 12.7533 3.33337C11.6867 2.2467 10.26 1.5267 8.66666 1.3667V7.33337H10.0467Z" fill="currentColor"/>
<path d="M5.95334 7.33337H7.33334V1.3667C5.74001 1.5267 4.30667 2.2467 3.24667 3.33337C4.70001 4.14003 5.74001 5.6067 5.95334 7.33337Z" fill="currentColor"/>
<path d="M10.0467 8.66675H8.66666V14.6334C10.26 14.4734 11.6933 13.7534 12.7533 12.6667C11.3 11.8601 10.26 10.3934 10.0467 8.66675Z" fill="currentColor"/>
<path d="M2.39334 11.6001C3.54 11.0467 4.38667 9.96008 4.60667 8.66675H1.36667C1.47334 9.74008 1.84 10.7401 2.39334 11.6001Z" fill="currentColor"/>
<path d="M11.3933 8.66675C11.6133 9.96675 12.4533 11.0467 13.6067 11.6001C14.16 10.7401 14.5267 9.74008 14.6333 8.66675H11.3933Z" fill="currentColor"/>
<path d="M5.95334 8.66675C5.74001 10.3934 4.70001 11.8601 3.24667 12.6667C4.31334 13.7534 5.74001 14.4734 7.33334 14.6334V8.66675H5.95334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsBasketball }

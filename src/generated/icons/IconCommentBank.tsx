import React, { FC } from 'react'

const IconCommentBank: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 1.33325H2.66668C1.93334 1.33325 1.33334 1.93325 1.33334 2.66659V14.6666L4.00001 11.9999H13.3333C14.0667 11.9999 14.6667 11.3999 14.6667 10.6666V2.66659C14.6667 1.93325 14.0667 1.33325 13.3333 1.33325ZM12.6667 8.66659L11 7.66659L9.33334 8.66659V3.33325H12.6667V8.66659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCommentBank }

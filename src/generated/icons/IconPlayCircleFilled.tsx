import React, { FC } from 'react'

const IconPlayCircleFilled: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33325C4.31999 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.31999 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM6.66666 10.3333V5.66659C6.66666 5.39325 6.98 5.23325 7.2 5.39992L10.3133 7.73325C10.4933 7.86659 10.4933 8.13325 10.3133 8.26659L7.2 10.5999C6.98 10.7666 6.66666 10.6066 6.66666 10.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPlayCircleFilled }

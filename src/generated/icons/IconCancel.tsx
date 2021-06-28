import React, { FC } from 'react'

const IconCancel: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM10.58 10.58C10.346 10.814 9.968 10.814 9.734 10.58L8 8.846L6.266 10.58C6.032 10.814 5.654 10.814 5.42 10.58C5.186 10.346 5.186 9.968 5.42 9.734L7.154 8L5.42 6.266C5.186 6.032 5.186 5.654 5.42 5.42C5.654 5.186 6.032 5.186 6.266 5.42L8 7.154L9.734 5.42C9.968 5.186 10.346 5.186 10.58 5.42C10.814 5.654 10.814 6.032 10.58 6.266L8.846 8L10.58 9.734C10.808 9.962 10.808 10.346 10.58 10.58Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCancel }

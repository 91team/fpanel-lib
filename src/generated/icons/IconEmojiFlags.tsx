import React, { FC } from 'react'

const IconEmojiFlags: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 5.99992H9.33334L8.85334 5.03325C8.74 4.80659 8.50667 4.66659 8.25334 4.66659H4.66667V3.81325C5.06667 3.58659 5.33334 3.15992 5.33334 2.66659C5.33334 1.93325 4.73334 1.33325 4.00001 1.33325C3.26667 1.33325 2.66667 1.93325 2.66667 2.66659C2.66667 3.15992 2.93334 3.58659 3.33334 3.81325V13.3333C3.33334 13.6999 3.63334 13.9999 4.00001 13.9999C4.36667 13.9999 4.66667 13.6999 4.66667 13.3333V11.3333H8L8.48 12.2999C8.59334 12.5266 8.82667 12.6666 9.07334 12.6666H12.6667C13.0333 12.6666 13.3333 12.3666 13.3333 11.9999V6.66659C13.3333 6.29992 13.0333 5.99992 12.6667 5.99992ZM12 11.3333H9.33334L8.66667 9.99992H4.66667V5.99992H8L8.66667 7.33325H12V11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconEmojiFlags }

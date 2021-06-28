import React, { FC } from 'react'

const IconMarkChatUnread: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 4.65333V10.6667C14.6666 11.4 14.0666 12 13.3333 12H3.99998L1.33331 14.6667V2.66667C1.33331 1.93333 1.93331 1.33333 2.66665 1.33333H9.39998C9.35998 1.54667 9.33331 1.77333 9.33331 2C9.33331 3.84 10.8266 5.33333 12.6666 5.33333C13.42 5.33333 14.1066 5.07333 14.6666 4.65333ZM10.6666 2C10.6666 3.10667 11.56 4 12.6666 4C13.7733 4 14.6666 3.10667 14.6666 2C14.6666 0.893333 13.7733 0 12.6666 0C11.56 0 10.6666 0.893333 10.6666 2Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMarkChatUnread }

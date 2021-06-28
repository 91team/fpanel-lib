import React, { FC } from 'react'

const IconBackup: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69341C12.4467 4.39341 10.4267 2.66675 8 2.66675C6.07333 2.66675 4.4 3.76008 3.56667 5.36008C1.56 5.57341 0 7.27341 0 9.33341C0 11.5401 1.79333 13.3334 4 13.3334H12.6667C14.5067 13.3334 16 11.8401 16 10.0001C16 8.24008 14.6333 6.81341 12.9 6.69341ZM9.33333 8.66675V11.3334H6.66667V8.66675H4.66667L7.76667 5.56675C7.9 5.43341 8.10667 5.43341 8.24 5.56675L11.3333 8.66675H9.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBackup }

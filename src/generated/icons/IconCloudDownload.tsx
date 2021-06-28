import React, { FC } from 'react'

const IconCloudDownload: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69334C12.4467 4.39334 10.4267 2.66667 8 2.66667C6.07333 2.66667 4.4 3.76 3.56667 5.36C1.56 5.57334 0 7.27334 0 9.33334C0 11.54 1.79333 13.3333 4 13.3333H12.6667C14.5067 13.3333 16 11.84 16 10C16 8.24 14.6333 6.81334 12.9 6.69334ZM11.3333 8.66667L8.23333 11.7667C8.1 11.9 7.89333 11.9 7.76 11.7667L4.66667 8.66667H6.66667V6H9.33333V8.66667H11.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCloudDownload }

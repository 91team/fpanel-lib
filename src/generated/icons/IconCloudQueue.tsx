import React, { FC } from 'react'

const IconCloudQueue: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69334C12.4467 4.39334 10.4267 2.66667 8 2.66667C6.07333 2.66667 4.4 3.76 3.56667 5.36C1.56 5.57334 0 7.27334 0 9.33334C0 11.54 1.79333 13.3333 4 13.3333H12.6667C14.5067 13.3333 16 11.84 16 10C16 8.24 14.6333 6.81334 12.9 6.69334ZM12.6667 12H4C2.52667 12 1.33333 10.8067 1.33333 9.33334C1.33333 7.86 2.52667 6.66667 4 6.66667H4.47333C4.91333 5.12667 6.32 4.00001 8 4.00001C10.0267 4.00001 11.6667 5.64 11.6667 7.66667V8H12.6667C13.7733 8 14.6667 8.89334 14.6667 10C14.6667 11.1067 13.7733 12 12.6667 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCloudQueue }

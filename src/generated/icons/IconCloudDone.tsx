import React, { FC } from 'react'

const IconCloudDone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69334C12.4467 4.39334 10.4267 2.66667 8 2.66667C6.07333 2.66667 4.4 3.76 3.56667 5.36C1.56 5.57334 0 7.27334 0 9.33334C0 11.54 1.79333 13.3333 4 13.3333H12.6667C14.5067 13.3333 16 11.84 16 10C16 8.24 14.6333 6.81334 12.9 6.69334ZM7.14 10.86C6.88 11.12 6.46 11.12 6.2 10.86L4.8 9.46667C4.54 9.20667 4.54 8.78667 4.8 8.52667C5.06 8.26667 5.48 8.26667 5.74 8.52667L6.66667 9.45334L9.65333 6.46667C9.91333 6.20667 10.3333 6.20667 10.5933 6.46667C10.8533 6.72667 10.8533 7.14667 10.5933 7.40667L7.14 10.86Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCloudDone }

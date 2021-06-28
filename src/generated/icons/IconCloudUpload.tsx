import React, { FC } from 'react'

const IconCloudUpload: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9 6.69334C12.4467 4.39334 10.4267 2.66667 8 2.66667C6.07333 2.66667 4.4 3.76 3.56667 5.36C1.56 5.57334 0 7.27334 0 9.33334C0 11.54 1.79333 13.3333 4 13.3333H12.6667C14.5067 13.3333 16 11.84 16 10C16 8.24 14.6333 6.81334 12.9 6.69334ZM9.33333 8.66667V11.3333H6.66667V8.66667H4.66667L7.76667 5.56667C7.9 5.43334 8.10667 5.43334 8.24 5.56667L11.3333 8.66667H9.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCloudUpload }

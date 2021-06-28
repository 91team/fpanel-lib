import React, { FC } from 'react'

const IconSwitchVideo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.33337V4.00004C12 3.63337 11.7 3.33337 11.3333 3.33337H2C1.63334 3.33337 1.33334 3.63337 1.33334 4.00004V12C1.33334 12.3667 1.63334 12.6667 2 12.6667H11.3333C11.7 12.6667 12 12.3667 12 12V9.66671L13.5267 11.1934C13.9467 11.6134 14.6667 11.3134 14.6667 10.72V5.27337C14.6667 4.68004 13.9467 4.38004 13.5267 4.80004L12 6.33337ZM8.66667 10.3334V8.66671H4.66667V10.3334L2.56667 8.23337C2.43334 8.10004 2.43334 7.89337 2.56667 7.76004L4.66667 5.66671V7.33337H8.66667V5.66671L10.7667 7.76671C10.9 7.90004 10.9 8.10671 10.7667 8.24004L8.66667 10.3334Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSwitchVideo }

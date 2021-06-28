import React, { FC } from 'react'

const IconSouthWest: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99998 11.9999C9.99998 11.6266 9.69998 11.3332 9.33331 11.3332H5.60665L12.8666 4.07323C13.1266 3.81323 13.1266 3.39323 12.8666 3.13323C12.6066 2.87323 12.1866 2.87323 11.9266 3.13323L4.66665 10.3932V6.66657C4.66665 6.2999 4.36665 5.9999 3.99998 5.9999C3.63331 5.9999 3.33331 6.2999 3.33331 6.66657V11.9999C3.33331 12.3666 3.63331 12.6666 3.99998 12.6666H9.33331C9.69998 12.6666 9.99998 12.3666 9.99998 11.9999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSouthWest }

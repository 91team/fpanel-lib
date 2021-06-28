import React, { FC } from 'react'

const IconUpload: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66665 10.6667H9.33331C9.69998 10.6667 9.99998 10.3667 9.99998 10V6.66667H11.06C11.6533 6.66667 11.9533 5.94667 11.5333 5.52667L8.47331 2.46667C8.21331 2.20667 7.79331 2.20667 7.53331 2.46667L4.47331 5.52667C4.05331 5.94667 4.34665 6.66667 4.93998 6.66667H5.99998V10C5.99998 10.3667 6.29998 10.6667 6.66665 10.6667ZM3.99998 12H12C12.3666 12 12.6666 12.3 12.6666 12.6667C12.6666 13.0333 12.3666 13.3333 12 13.3333H3.99998C3.63331 13.3333 3.33331 13.0333 3.33331 12.6667C3.33331 12.3 3.63331 12 3.99998 12Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconUpload }

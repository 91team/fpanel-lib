import React, { FC } from 'react'

const IconDesktopAccessDisabled: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.206658 1.33331C-0.0533423 1.59331 -0.0533423 2.01331 0.206658 2.27331L0.666658 2.72664V10.6666C0.666658 11.4 1.26666 12 1.99999 12H6.66666V13.3333H5.99999C5.63332 13.3333 5.33332 13.6333 5.33332 14C5.33332 14.3666 5.63332 14.6666 5.99999 14.6666H9.99999C10.3667 14.6666 10.6667 14.3666 10.6667 14C10.6667 13.6333 10.3667 13.3333 9.99999 13.3333H9.33332V12H9.93332L13.46 15.5266C13.72 15.7866 14.14 15.7866 14.4 15.5266C14.66 15.2666 14.66 14.8466 14.4 14.5866L1.14666 1.33331C0.886658 1.07331 0.466658 1.07331 0.206658 1.33331ZM1.99332 9.99997V4.05997L8.59999 10.6666H2.65999C2.29332 10.6666 1.99332 10.3666 1.99332 9.99997ZM3.03332 1.33331L4.36666 2.66664H13.3333C13.7 2.66664 14 2.96664 14 3.33331V9.99997C14 10.3666 13.7 10.6666 13.3333 10.6666H12.3667L13.7 12H13.9933C14.7267 12 15.3267 11.4 15.3267 10.6666V2.66664C15.3267 1.93331 14.7267 1.33331 13.9933 1.33331H3.03332Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDesktopAccessDisabled }

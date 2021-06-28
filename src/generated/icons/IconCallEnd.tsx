import React, { FC } from 'react'

const IconCallEnd: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00666 10.32L4.33999 9.26001C4.65999 9.00668 4.84666 8.62001 4.84666 8.21334V6.48001C6.85999 5.82668 9.03999 5.82001 11.06 6.48001V8.22001C11.06 8.62668 11.2467 9.01334 11.5667 9.26668L12.8933 10.32C13.4267 10.74 14.1867 10.7 14.6667 10.22L15.48 9.40668C16.0133 8.87334 16.0133 7.98668 15.4467 7.48668C11.1733 3.71334 4.73333 3.71334 0.459993 7.48668C-0.106674 7.98668 -0.106674 8.87334 0.426659 9.40668L1.23999 10.22C1.71333 10.7 2.47333 10.74 3.00666 10.32Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCallEnd }

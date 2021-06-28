import React, { FC } from 'react'

const IconNoTransfer: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85335 1.96671C4.82668 1.44004 6.32002 1.33337 8.00002 1.33337C10.9467 1.33337 13.3333 1.66671 13.3333 4.00004V10.6667C13.3333 10.9 13.28 11.1134 13.2067 11.32L9.22002 7.33337H12V4.00004H5.88668L3.85335 1.96671ZM13.66 14.6C13.4 14.86 12.98 14.86 12.72 14.6L12.0467 13.9267C11.9267 13.9734 11.8 14 11.6667 14C11.1133 14 10.6667 13.5467 10.6667 13V12.6667H5.33335V13C5.33335 13.5534 4.88668 14 4.33335 14C3.78002 14 3.33335 13.5534 3.33335 13V12.1467C2.92668 11.78 2.66668 11.2534 2.66668 10.6667V4.55337L1.40002 3.28671C1.14002 3.02671 1.14002 2.60671 1.40002 2.34671C1.66002 2.08671 2.08002 2.08671 2.34002 2.34671L13.6533 13.66C13.92 13.92 13.92 14.34 13.66 14.6ZM6.00002 10.3334C6.00002 9.78004 5.55335 9.33337 5.00002 9.33337C4.44668 9.33337 4.00002 9.78004 4.00002 10.3334C4.00002 10.8867 4.44668 11.3334 5.00002 11.3334C5.55335 11.3334 6.00002 10.8867 6.00002 10.3334ZM5.44668 7.33337L4.00002 5.88671V7.33337H5.44668Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNoTransfer }

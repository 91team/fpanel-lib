import React, { FC } from 'react'

const IconTabUnselected: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666656 6H1.99999V4.66667H0.666656V6ZM0.666656 8.66667H1.99999V7.33333H0.666656V8.66667ZM0.666656 3.33333H1.99999V2C1.26666 2 0.666656 2.6 0.666656 3.33333ZM5.99999 14H7.33332V12.6667H5.99999V14ZM0.666656 11.3333H1.99999V10H0.666656V11.3333ZM1.99999 14V12.6667H0.666656C0.666656 13.4 1.26666 14 1.99999 14ZM14 2H8.66666V5.33333C8.66666 5.7 8.96666 6 9.33332 6H15.3333V3.33333C15.3333 2.6 14.7333 2 14 2ZM14 11.3333H15.3333V10H14V11.3333ZM5.99999 3.33333H7.33332V2H5.99999V3.33333ZM3.33332 14H4.66666V12.6667H3.33332V14ZM3.33332 3.33333H4.66666V2H3.33332V3.33333ZM14 14C14.7333 14 15.3333 13.4 15.3333 12.6667H14V14ZM14 8.66667H15.3333V7.33333H14V8.66667ZM8.66666 14H9.99999V12.6667H8.66666V14ZM11.3333 14H12.6667V12.6667H11.3333V14Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTabUnselected }

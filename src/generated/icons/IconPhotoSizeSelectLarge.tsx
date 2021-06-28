import React, { FC } from 'react'

const IconPhotoSizeSelectLarge: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10H15.3333V11.3333H14V10ZM14 7.33333H15.3333V8.66667H14V7.33333ZM15.3333 12.6667H14V14C14.6667 14 15.3333 13.3333 15.3333 12.6667ZM8.66666 2H9.99999V3.33333H8.66666V2ZM14 4.66667H15.3333V6H14V4.66667ZM14 2V3.33333H15.3333C15.3333 2.66667 14.6667 2 14 2ZM0.666656 4.66667H1.99999V6H0.666656V4.66667ZM11.3333 2H12.6667V3.33333H11.3333V2ZM11.3333 12.6667H12.6667V14H11.3333V12.6667ZM1.99999 2C1.33332 2 0.666656 2.66667 0.666656 3.33333H1.99999V2ZM5.99999 2H7.33332V3.33333H5.99999V2ZM3.33332 2H4.66666V3.33333H3.33332V2ZM0.666656 7.33333V12.6667C0.666656 13.4 1.26666 14 1.99999 14H9.99999V8.66667C9.99999 7.93333 9.39999 7.33333 8.66666 7.33333H0.666656ZM2.41999 12.1267L3.41332 10.8533C3.54666 10.6867 3.79332 10.68 3.93332 10.8467L4.85999 11.96L6.25999 10.16C6.39332 9.98667 6.65999 9.98667 6.78666 10.1667L8.26666 12.14C8.43332 12.36 8.27332 12.6733 7.99999 12.6733H2.67999C2.40666 12.6667 2.24666 12.3467 2.41999 12.1267Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhotoSizeSelectLarge }

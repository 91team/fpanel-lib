import React, { FC } from 'react'

const IconArrowDropDownCircle: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33337C4.32001 1.33337 1.33334 4.32004 1.33334 8.00004C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00001 1.33337ZM7.76668 9.76671L5.90668 7.90671C5.69334 7.69337 5.84001 7.33337 6.14001 7.33337H9.86668C10.1667 7.33337 10.3133 7.69337 10.1 7.90004L8.24001 9.76004C8.10668 9.89337 7.89334 9.89337 7.76668 9.76671Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowDropDownCircle }

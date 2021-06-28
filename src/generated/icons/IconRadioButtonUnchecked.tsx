import React, { FC } from 'react'

const IconRadioButtonUnchecked: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.05334 13.3333 2.66668 10.9466 2.66668 7.99992C2.66668 5.05325 5.05334 2.66659 8.00001 2.66659C10.9467 2.66659 13.3333 5.05325 13.3333 7.99992C13.3333 10.9466 10.9467 13.3333 8.00001 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconRadioButtonUnchecked }

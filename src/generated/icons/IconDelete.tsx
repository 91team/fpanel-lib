import React, { FC } from 'react'

const IconDelete: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.57143 11.8889C4.57143 12.5 5.08571 13 5.71429 13H10.2857C10.9143 13 11.4286 12.5 11.4286 11.8889V6.33333C11.4286 5.72222 10.9143 5.22222 10.2857 5.22222H5.71429C5.08571 5.22222 4.57143 5.72222 4.57143 6.33333V11.8889ZM11.4286 3.55556H10L9.59429 3.16111C9.49143 3.06111 9.34286 3 9.19429 3H6.80571C6.65714 3 6.50857 3.06111 6.40571 3.16111L6 3.55556H4.57143C4.25714 3.55556 4 3.80556 4 4.11111C4 4.41667 4.25714 4.66667 4.57143 4.66667H11.4286C11.7429 4.66667 12 4.41667 12 4.11111C12 3.80556 11.7429 3.55556 11.4286 3.55556Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDelete }

import React, { FC } from 'react'

const IconSend: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.26666 13.6L13.9 8.6133C14.44 8.37997 14.44 7.61997 13.9 7.38664L2.26666 2.39997C1.82666 2.20664 1.33999 2.5333 1.33999 3.00664L1.33333 6.07997C1.33333 6.4133 1.57999 6.69997 1.91333 6.73997L11.3333 7.99997L1.91333 9.2533C1.57999 9.29997 1.33333 9.58664 1.33333 9.91997L1.33999 12.9933C1.33999 13.4666 1.82666 13.7933 2.26666 13.6Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSend }

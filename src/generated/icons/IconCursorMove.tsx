import React, { FC } from 'react'

const IconCursorMove: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4271 10.0731L5.42701 2.07301C5.3555 2.0015 5.24851 1.9805 5.1545 2.01901C5.06101 2.05751 5 2.14902 5 2.25001V13.7502C5 13.8547 5.06499 13.9482 5.1635 13.9847C5.19151 13.9952 5.22099 14.0001 5.25001 14.0001C5.32152 14.0001 5.3915 13.9691 5.4395 13.9127L8.36503 10.5001H13.2501C13.3511 10.5001 13.4426 10.4391 13.4811 10.3456C13.5201 10.2521 13.4986 10.1451 13.4271 10.0731Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCursorMove }

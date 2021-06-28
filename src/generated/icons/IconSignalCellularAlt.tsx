import React, { FC } from 'react'

const IconSignalCellularAlt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 2.66663C12.8867 2.66663 13.3333 3.11329 13.3333 3.66663V12.3333C13.3333 12.8866 12.8867 13.3333 12.3333 13.3333C11.78 13.3333 11.3333 12.8866 11.3333 12.3333V3.66663C11.3333 3.11329 11.78 2.66663 12.3333 2.66663ZM4.33333 9.33329C4.88666 9.33329 5.33333 9.77996 5.33333 10.3333V12.3333C5.33333 12.8866 4.88666 13.3333 4.33333 13.3333C3.77999 13.3333 3.33333 12.8866 3.33333 12.3333V10.3333C3.33333 9.77996 3.77999 9.33329 4.33333 9.33329ZM8.33333 5.99996C8.88666 5.99996 9.33333 6.44663 9.33333 6.99996V12.3333C9.33333 12.8866 8.88666 13.3333 8.33333 13.3333C7.77999 13.3333 7.33333 12.8866 7.33333 12.3333V6.99996C7.33333 6.44663 7.77999 5.99996 8.33333 5.99996Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellularAlt }

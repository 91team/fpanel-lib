import React, { FC } from 'react'

const IconVpnLock: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6133 7.99996C12.64 8.21996 12.6667 8.43996 12.6667 8.66663C12.6667 10.0533 12.1333 11.3133 11.2667 12.26C11.0933 11.72 10.6 11.3333 9.99999 11.3333H9.33332V9.33329C9.33332 8.96663 9.03332 8.66663 8.66666 8.66663H4.66666V7.33329H5.99999C6.36666 7.33329 6.66666 7.03329 6.66666 6.66663V5.33329H7.99999C8.73332 5.33329 9.33332 4.73329 9.33332 3.99996V2.30663C8.69999 2.10663 8.03332 1.99996 7.33332 1.99996C3.65332 1.99996 0.666656 4.98663 0.666656 8.66663C0.666656 12.3466 3.65332 15.3333 7.33332 15.3333C11.0133 15.3333 14 12.3466 14 8.66663C14 8.43996 13.9867 8.21996 13.9667 7.99996H12.6133ZM6.66666 13.9533C4.03332 13.6266 1.99999 11.3866 1.99999 8.66663C1.99999 8.25329 2.05332 7.85996 2.13999 7.47329L5.33332 10.6666V11.3333C5.33332 12.0666 5.93332 12.6666 6.66666 12.6666V13.9533ZM14.6667 2.66663V2.33329C14.6667 1.41329 13.92 0.666626 13 0.666626C12.08 0.666626 11.3333 1.41329 11.3333 2.33329V2.66663C10.9667 2.66663 10.6667 2.96663 10.6667 3.33329V5.99996C10.6667 6.36663 10.9667 6.66663 11.3333 6.66663H14.6667C15.0333 6.66663 15.3333 6.36663 15.3333 5.99996V3.33329C15.3333 2.96663 15.0333 2.66663 14.6667 2.66663ZM14 2.66663H12V2.33329C12 1.77996 12.4467 1.33329 13 1.33329C13.5533 1.33329 14 1.77996 14 2.33329V2.66663Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconVpnLock }

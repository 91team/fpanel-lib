import React, { FC } from 'react'

const IconArrowBackIos: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.08 1.99329C10.7533 1.66662 10.2267 1.66662 9.90001 1.99329L4.36001 7.53329C4.10001 7.79329 4.10001 8.21329 4.36001 8.47329L9.90001 14.0133C10.2267 14.34 10.7533 14.34 11.08 14.0133C11.4067 13.6866 11.4067 13.16 11.08 12.8333L6.25334 7.99996L11.0867 3.16662C11.4067 2.84662 11.4067 2.31329 11.08 1.99329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconArrowBackIos }

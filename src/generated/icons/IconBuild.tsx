import React, { FC } from 'react'

const IconBuild: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.06 1.93997C6.72 0.59997 4.71334 0.326636 3.1 1.1133L5.52 3.5333C5.78 3.7933 5.78 4.2133 5.52 4.4733L4.46 5.5333C4.2 5.79997 3.78 5.79997 3.52 5.5333L1.1 3.1133C0.320002 4.7333 0.593336 6.72664 1.93334 8.06664C3.17334 9.30664 4.98667 9.6333 6.52667 9.0533L11.8333 14.36C12.52 15.0466 13.6267 15.0466 14.3067 14.36C14.9933 13.6733 14.9933 12.5666 14.3067 11.8866L9.02667 6.59997C9.64 5.03997 9.32 3.19997 8.06 1.93997Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBuild }

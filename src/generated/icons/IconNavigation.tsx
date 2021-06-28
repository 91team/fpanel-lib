import React, { FC } from 'react'

const IconNavigation: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.62 2.84005L12.72 12.8334C12.9467 13.3867 12.38 13.94 11.8333 13.6934L8.27333 12.12C8.09999 12.0467 7.90666 12.0467 7.73333 12.12L4.17333 13.6934C3.62666 13.9334 3.06 13.3867 3.28666 12.8334L7.38666 2.84005C7.60666 2.28672 8.39333 2.28672 8.62 2.84005Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNavigation }

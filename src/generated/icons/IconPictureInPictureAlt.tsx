import React, { FC } from 'react'

const IconPictureInPictureAlt: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7.33333H8C7.63333 7.33333 7.33333 7.63333 7.33333 8V10.6667C7.33333 11.0333 7.63333 11.3333 8 11.3333H12C12.3667 11.3333 12.6667 11.0333 12.6667 10.6667V8C12.6667 7.63333 12.3667 7.33333 12 7.33333ZM15.3333 12.6667V3.32C15.3333 2.58667 14.7333 2 14 2H2C1.26666 2 0.666664 2.58667 0.666664 3.32V12.6667C0.666664 13.4 1.26666 14 2 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667ZM13.3333 12.68H2.66666C2.3 12.68 2 12.38 2 12.0133V3.98C2 3.61333 2.3 3.31333 2.66666 3.31333H13.3333C13.7 3.31333 14 3.61333 14 3.98V12.0133C14 12.38 13.7 12.68 13.3333 12.68Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPictureInPictureAlt }

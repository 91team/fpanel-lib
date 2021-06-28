import React, { FC } from 'react'

const IconPictureInPicture: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.66667H8C7.63334 4.66667 7.33334 4.96667 7.33334 5.33333V8C7.33334 8.36667 7.63334 8.66667 8 8.66667H12C12.3667 8.66667 12.6667 8.36667 12.6667 8V5.33333C12.6667 4.96667 12.3667 4.66667 12 4.66667ZM14 2H2.00001C1.26667 2 0.666672 2.6 0.666672 3.33333V12.6667C0.666672 13.4 1.26667 13.9867 2.00001 13.9867H14C14.7333 13.9867 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM13.3333 12.6733H2.66667C2.3 12.6733 2.00001 12.3733 2.00001 12.0067V3.98667C2.00001 3.62 2.3 3.32 2.66667 3.32H13.3333C13.7 3.32 14 3.62 14 3.98667V12.0067C14 12.3733 13.7 12.6733 13.3333 12.6733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPictureInPicture }

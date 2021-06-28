import React, { FC } from 'react'

const IconPhotoSizeSelectActual: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H1.99999C1.33332 2 0.666656 2.66667 0.666656 3.33333V12.6667C0.666656 13.4 1.26666 14 1.99999 14H14C14.6667 14 15.3333 13.3333 15.3333 12.6667V3.33333C15.3333 2.66667 14.6667 2 14 2ZM3.75332 10.7933L5.41332 8.66C5.54666 8.49333 5.79999 8.48667 5.93332 8.65333L7.33332 10.34L9.39999 7.68C9.53332 7.50667 9.79999 7.50667 9.93332 7.68667L12.2733 10.8067C12.44 11.0267 12.28 11.34 12.0067 11.34H4.01332C3.73999 11.3333 3.57999 11.0133 3.75332 10.7933Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhotoSizeSelectActual }

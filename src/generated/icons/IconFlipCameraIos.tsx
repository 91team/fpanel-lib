import React, { FC } from 'react'

const IconFlipCameraIos: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 3.33333H11.22L10.3933 2.43333C10.1467 2.16 9.78668 2 9.41334 2H6.58668C6.21334 2 5.85334 2.16 5.60001 2.43333L4.78001 3.33333H2.66668C1.93334 3.33333 1.33334 3.93333 1.33334 4.66667V12.6667C1.33334 13.4 1.93334 14 2.66668 14H13.3333C14.0667 14 14.6667 13.4 14.6667 12.6667V4.66667C14.6667 3.93333 14.0667 3.33333 13.3333 3.33333ZM9.11334 11.8C8.76668 11.9267 8.39334 12 8.00001 12C6.16001 12 4.66668 10.5067 4.66668 8.66667H3.33334L5.00001 7L6.66668 8.66667H5.33334C5.33334 10.14 6.52668 11.3333 8.00001 11.3333C8.30668 11.3333 8.60668 11.28 8.88001 11.18C9.00668 11.1333 9.14001 11.16 9.23334 11.2533C9.40668 11.4267 9.34001 11.7133 9.11334 11.8ZM11 10.3333L9.33334 8.66667H10.6667C10.6667 7.19333 9.47334 6 8.00001 6C7.69334 6 7.39334 6.05333 7.12001 6.15333C6.99334 6.2 6.86001 6.17333 6.76668 6.08C6.59334 5.90667 6.66001 5.62 6.88668 5.53333C7.23334 5.40667 7.60668 5.33333 8.00001 5.33333C9.84001 5.33333 11.3333 6.82667 11.3333 8.66667H12.6667L11 10.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFlipCameraIos }

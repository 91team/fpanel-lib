import React, { FC } from 'react'

const IconNotifications: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14.6667C8.73334 14.6667 9.33334 14.0667 9.33334 13.3334H6.66667C6.66667 14.0667 7.26 14.6667 8 14.6667ZM12 10.6667V7.33342C12 5.28675 10.9067 3.57341 9 3.12008V2.66675C9 2.11341 8.55334 1.66675 8 1.66675C7.44667 1.66675 7 2.11341 7 2.66675V3.12008C5.08667 3.57341 4 5.28008 4 7.33342V10.6667L3.14 11.5267C2.72 11.9467 3.01334 12.6667 3.60667 12.6667H12.3867C12.98 12.6667 13.28 11.9467 12.86 11.5267L12 10.6667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNotifications }

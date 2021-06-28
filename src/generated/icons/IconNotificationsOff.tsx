import React, { FC } from 'react'

const IconNotificationsOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00002 14.6667C8.73335 14.6667 9.33335 14.0667 9.33335 13.3334H6.66669C6.66669 14.0667 7.26002 14.6667 8.00002 14.6667ZM12 7.33342C12 5.28675 10.9067 3.57341 9.00002 3.12008V2.66675C9.00002 2.11341 8.55335 1.66675 8.00002 1.66675C7.44669 1.66675 7.00002 2.11341 7.00002 2.66675V3.12008C6.84002 3.16008 6.68669 3.22008 6.54002 3.27341L12 8.73342V7.33342ZM3.60669 2.23341L2.66669 3.17341L4.54002 5.04675C4.19335 5.71342 4.00002 6.48675 4.00002 7.33342V10.6667L3.14002 11.5267C2.72002 11.9467 3.01335 12.6667 3.60669 12.6667H12.16L13.32 13.8267L14.26 12.8867L3.60669 2.23341Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNotificationsOff }

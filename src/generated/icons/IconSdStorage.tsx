import React, { FC } from 'react'

const IconSdStorage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.33337H7.22002C6.86669 1.33337 6.52669 1.47337 6.27335 1.72671L3.06669 4.94671C2.82002 5.19337 2.66669 5.53337 2.66669 5.88004V13.3334C2.66669 14.0667 3.26669 14.6667 4.00002 14.6667H12C12.7334 14.6667 13.3334 14.0667 13.3334 13.3334V2.66671C13.3334 1.93337 12.7334 1.33337 12 1.33337ZM7.33335 5.33337C6.96669 5.33337 6.66669 5.03337 6.66669 4.66671V3.33337C6.66669 2.96671 6.96669 2.66671 7.33335 2.66671C7.70002 2.66671 8.00002 2.96671 8.00002 3.33337V4.66671C8.00002 5.03337 7.70002 5.33337 7.33335 5.33337ZM9.33335 5.33337C8.96669 5.33337 8.66669 5.03337 8.66669 4.66671V3.33337C8.66669 2.96671 8.96669 2.66671 9.33335 2.66671C9.70002 2.66671 10 2.96671 10 3.33337V4.66671C10 5.03337 9.70002 5.33337 9.33335 5.33337ZM11.3334 5.33337C10.9667 5.33337 10.6667 5.03337 10.6667 4.66671V3.33337C10.6667 2.96671 10.9667 2.66671 11.3334 2.66671C11.7 2.66671 12 2.96671 12 3.33337V4.66671C12 5.03337 11.7 5.33337 11.3334 5.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSdStorage }

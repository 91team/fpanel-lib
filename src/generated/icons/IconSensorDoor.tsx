import React, { FC } from 'react'

const IconSensorDoor: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.33334H4.00002C3.26669 1.33334 2.66669 1.93334 2.66669 2.66668V13.3333C2.66669 14.0667 3.26669 14.6667 4.00002 14.6667H12C12.7334 14.6667 13.3334 14.0667 13.3334 13.3333V2.66668C13.3334 1.93334 12.7334 1.33334 12 1.33334ZM10.3334 9.00001C9.78002 9.00001 9.33335 8.55334 9.33335 8.00001C9.33335 7.44668 9.78002 7.00001 10.3334 7.00001C10.8867 7.00001 11.3334 7.44668 11.3334 8.00001C11.3334 8.55334 10.8867 9.00001 10.3334 9.00001Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSensorDoor }

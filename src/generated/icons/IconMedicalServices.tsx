import React, { FC } from 'react'

const IconMedicalServices: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 4.00004H10.6667V2.66671C10.6667 1.93337 10.0667 1.33337 9.33334 1.33337H6.66668C5.93334 1.33337 5.33334 1.93337 5.33334 2.66671V4.00004H2.66668C1.93334 4.00004 1.33334 4.60004 1.33334 5.33337V13.3334C1.33334 14.0667 1.93334 14.6667 2.66668 14.6667H13.3333C14.0667 14.6667 14.6667 14.0667 14.6667 13.3334V5.33337C14.6667 4.60004 14.0667 4.00004 13.3333 4.00004ZM6.66668 2.66671H9.33334V4.00004H6.66668V2.66671ZM10 10H8.66668V11.3334C8.66668 11.7 8.36668 12 8.00001 12C7.63334 12 7.33334 11.7 7.33334 11.3334V10H6.00001C5.63334 10 5.33334 9.70004 5.33334 9.33337C5.33334 8.96671 5.63334 8.66671 6.00001 8.66671H7.33334V7.33337C7.33334 6.96671 7.63334 6.66671 8.00001 6.66671C8.36668 6.66671 8.66668 6.96671 8.66668 7.33337V8.66671H10C10.3667 8.66671 10.6667 8.96671 10.6667 9.33337C10.6667 9.70004 10.3667 10 10 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconMedicalServices }

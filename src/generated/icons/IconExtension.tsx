import React, { FC } from 'react'

const IconExtension: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 7.33342H12.6667V4.66675C12.6667 3.93341 12.0667 3.33341 11.3333 3.33341H8.66668V2.33341C8.66668 1.41341 7.92001 0.666748 7.00001 0.666748C6.08001 0.666748 5.33334 1.41341 5.33334 2.33341V3.33341H2.66668C1.93334 3.33341 1.34001 3.93341 1.34001 4.66675V7.20008H2.33334C3.32668 7.20008 4.13334 8.00675 4.13334 9.00008C4.13334 9.99341 3.32668 10.8001 2.33334 10.8001H1.33334V13.3334C1.33334 14.0667 1.93334 14.6667 2.66668 14.6667H5.20001V13.6667C5.20001 12.6734 6.00668 11.8667 7.00001 11.8667C7.99334 11.8667 8.80001 12.6734 8.80001 13.6667V14.6667H11.3333C12.0667 14.6667 12.6667 14.0667 12.6667 13.3334V10.6667H13.6667C14.5867 10.6667 15.3333 9.92008 15.3333 9.00008C15.3333 8.08008 14.5867 7.33342 13.6667 7.33342Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconExtension }

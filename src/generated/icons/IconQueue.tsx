import React, { FC } from 'react'

const IconQueue: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00001 3.99992C1.63334 3.99992 1.33334 4.29992 1.33334 4.66659V13.3333C1.33334 14.0666 1.93334 14.6666 2.66668 14.6666H11.3333C11.7 14.6666 12 14.3666 12 13.9999C12 13.6333 11.7 13.3333 11.3333 13.3333H3.33334C2.96668 13.3333 2.66668 13.0333 2.66668 12.6666V4.66659C2.66668 4.29992 2.36668 3.99992 2.00001 3.99992ZM13.3333 1.33325H5.33334C4.60001 1.33325 4.00001 1.93325 4.00001 2.66659V10.6666C4.00001 11.3999 4.60001 11.9999 5.33334 11.9999H13.3333C14.0667 11.9999 14.6667 11.3999 14.6667 10.6666V2.66659C14.6667 1.93325 14.0667 1.33325 13.3333 1.33325ZM12 7.33325H10V9.33325C10 9.69992 9.70001 9.99992 9.33334 9.99992C8.96668 9.99992 8.66668 9.69992 8.66668 9.33325V7.33325H6.66668C6.30001 7.33325 6.00001 7.03325 6.00001 6.66659C6.00001 6.29992 6.30001 5.99992 6.66668 5.99992H8.66668V3.99992C8.66668 3.63325 8.96668 3.33325 9.33334 3.33325C9.70001 3.33325 10 3.63325 10 3.99992V5.99992H12C12.3667 5.99992 12.6667 6.29992 12.6667 6.66659C12.6667 7.03325 12.3667 7.33325 12 7.33325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconQueue }

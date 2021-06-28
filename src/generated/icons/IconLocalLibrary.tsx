import React, { FC } from 'react'

const IconLocalLibrary: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7.70004C6.78667 6.56671 5.25333 5.77337 3.54667 5.46671C2.74 5.32671 2 5.96671 2 6.78671V10.9467C2 12.0667 2.48 12.6534 3.14 12.74C4.80667 12.9534 6.32 13.64 7.56 14.6534C7.79333 14.8467 8.17333 14.8667 8.40667 14.68C9.65333 13.66 11.18 12.96 12.86 12.7467C13.4867 12.66 14 12.04 14 11.4V6.78671C14 5.96671 13.26 5.32671 12.4533 5.46671C10.7467 5.77337 9.21333 6.56671 8 7.70004ZM8 5.33337C9.10667 5.33337 10 4.44004 10 3.33337C10 2.22671 9.10667 1.33337 8 1.33337C6.89333 1.33337 6 2.22671 6 3.33337C6 4.44004 6.89333 5.33337 8 5.33337Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalLibrary }

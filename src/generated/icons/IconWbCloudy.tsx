import React, { FC } from 'react'

const IconWbCloudy: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M12.9133 6.69329C12.4533 4.39329 10.4333 2.66663 8.00665 2.66663C6.07999 2.66663 4.40665 3.75996 3.57332 5.35996C1.56665 5.57329 0.00665283 7.27329 0.00665283 9.33329C0.00665283 11.54 1.79999 13.3333 4.00665 13.3333H12.6733C14.5133 13.3333 16.0067 11.84 16.0067 9.99996C16.0067 8.23996 14.64 6.81329 12.9133 6.69329Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWbCloudy }

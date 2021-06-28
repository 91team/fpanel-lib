import React, { FC } from 'react'

const IconPanorama: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3333 12V3.99996C15.3333 3.26663 14.7333 2.66663 14 2.66663H1.99999C1.26666 2.66663 0.666656 3.26663 0.666656 3.99996V12C0.666656 12.7333 1.26666 13.3333 1.99999 13.3333H14C14.7333 13.3333 15.3333 12.7333 15.3333 12ZM5.93332 8.65329L7.33332 10.34L9.39999 7.67996C9.53332 7.50663 9.79999 7.50663 9.93332 7.68663L12.2733 10.8066C12.44 11.0266 12.28 11.34 12.0067 11.34H4.01332C3.73332 11.34 3.57999 11.02 3.75332 10.8L5.41332 8.66663C5.53999 8.49329 5.79332 8.48663 5.93332 8.65329Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPanorama }

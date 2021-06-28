import React, { FC } from 'react'

const IconDriveEta: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6133 3.33996C12.48 2.94663 12.1067 2.66663 11.6667 2.66663H4.33333C3.89333 2.66663 3.52667 2.94663 3.38667 3.33996L2.07333 7.11996C2.02667 7.25996 2 7.40663 2 7.55996V12.3333C2 12.8866 2.44667 13.3333 3 13.3333C3.55333 13.3333 4 12.8866 4 12.3333V12H12V12.3333C12 12.88 12.4467 13.3333 13 13.3333C13.5467 13.3333 14 12.8866 14 12.3333V7.55996C14 7.41329 13.9733 7.25996 13.9267 7.11996L12.6133 3.33996ZM4.33333 9.99996C3.78 9.99996 3.33333 9.55329 3.33333 8.99996C3.33333 8.44663 3.78 7.99996 4.33333 7.99996C4.88667 7.99996 5.33333 8.44663 5.33333 8.99996C5.33333 9.55329 4.88667 9.99996 4.33333 9.99996ZM11.6667 9.99996C11.1133 9.99996 10.6667 9.55329 10.6667 8.99996C10.6667 8.44663 11.1133 7.99996 11.6667 7.99996C12.22 7.99996 12.6667 8.44663 12.6667 8.99996C12.6667 9.55329 12.22 9.99996 11.6667 9.99996ZM3.33333 6.66663L4.18 4.11996C4.27333 3.85329 4.52667 3.66663 4.81333 3.66663H11.1867C11.4733 3.66663 11.7267 3.85329 11.82 4.11996L12.6667 6.66663H3.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDriveEta }

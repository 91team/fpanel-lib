import React, { FC } from 'react'

const IconDeveloperMode: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 3.33329H11.3333V3.99996C11.3333 4.36663 11.6333 4.66663 12 4.66663C12.3667 4.66663 12.6667 4.36663 12.6667 3.99996V1.99996C12.6667 1.26663 12.0667 0.673293 11.3333 0.673293L4.66667 0.666626C3.93334 0.666626 3.33334 1.26663 3.33334 1.99996V3.99996C3.33334 4.36663 3.63334 4.66663 4.00001 4.66663C4.36667 4.66663 4.66667 4.36663 4.66667 3.99996V3.33329ZM10.7467 10.5866L12.86 8.47329C13.12 8.21329 13.12 7.79329 12.86 7.53329L10.7467 5.41996C10.4867 5.15996 10.06 5.15996 9.80001 5.41996C9.54001 5.67996 9.54001 6.09996 9.80001 6.35996L11.4467 7.99996L9.80001 9.64663C9.54001 9.90663 9.54001 10.3266 9.80001 10.5866C10.06 10.8466 10.4867 10.8466 10.7467 10.5866ZM6.19334 9.63996L4.55334 7.99996L6.19334 6.35996C6.45334 6.09996 6.45334 5.67996 6.19334 5.41996C5.93334 5.15996 5.50667 5.15996 5.24667 5.41996L3.13334 7.53329C2.87334 7.79329 2.87334 8.21329 3.13334 8.47329L5.24667 10.5866C5.50667 10.8466 5.93334 10.8466 6.19334 10.5866C6.46001 10.3266 6.45334 9.89996 6.19334 9.63996ZM11.3333 12.6666H4.66667V12C4.66667 11.6333 4.36667 11.3333 4.00001 11.3333C3.63334 11.3333 3.33334 11.6333 3.33334 12V14C3.33334 14.7333 3.93334 15.3333 4.66667 15.3333H11.3333C12.0667 15.3333 12.6667 14.7333 12.6667 14V12C12.6667 11.6333 12.3667 11.3333 12 11.3333C11.6333 11.3333 11.3333 11.6333 11.3333 12V12.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconDeveloperMode }

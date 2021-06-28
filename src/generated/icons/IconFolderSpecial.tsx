import React, { FC } from 'react'

const IconFolderSpecial: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 3.99996H8.00001L7.06001 3.05996C6.80668 2.80663 6.46668 2.66663 6.11334 2.66663H2.66668C1.93334 2.66663 1.33334 3.26663 1.33334 3.99996V12C1.33334 12.7333 1.93334 13.3333 2.66668 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3333 3.99996ZM11.2933 10.94L10 10.1866L8.70668 10.94C8.45334 11.0866 8.14668 10.86 8.21334 10.5733L8.55334 9.10663L7.42668 8.13329C7.20668 7.93996 7.32001 7.57329 7.61334 7.54663L9.10001 7.41996L9.68668 6.04663C9.80001 5.77996 10.1867 5.77996 10.3 6.04663L10.8867 7.41996L12.3733 7.54663C12.6667 7.57329 12.7867 7.93996 12.56 8.13329L11.4333 9.10663L11.7733 10.5733C11.8467 10.86 11.54 11.0866 11.2933 10.94Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFolderSpecial }

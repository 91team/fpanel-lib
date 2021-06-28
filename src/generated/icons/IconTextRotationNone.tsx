import React, { FC } from 'react'

const IconTextRotationNone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7667 11.7667L12.5733 10.5733C12.36 10.36 12 10.5067 12 10.8067V11.3333H4C3.63334 11.3333 3.33334 11.6333 3.33334 12C3.33334 12.3667 3.63334 12.6667 4 12.6667H12V13.1933C12 13.4933 12.36 13.64 12.5667 13.4267L13.76 12.2333C13.8933 12.1067 13.8933 11.8933 13.7667 11.7667ZM6.33334 7.86667H9.66667L10.1067 8.93333C10.2067 9.17333 10.44 9.33333 10.7 9.33333C11.16 9.33333 11.4667 8.86 11.2867 8.44L8.7 2.46C8.58 2.18 8.30667 2 8 2C7.69334 2 7.42 2.18 7.3 2.46L4.71334 8.44C4.53334 8.86 4.84667 9.33333 5.30667 9.33333C5.56667 9.33333 5.8 9.17333 5.9 8.93333L6.33334 7.86667ZM8 3.32L9.24667 6.66667H6.75334L8 3.32Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTextRotationNone }

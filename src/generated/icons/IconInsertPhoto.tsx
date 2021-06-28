import React, { FC } from 'react'

const IconInsertPhoto: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667ZM5.93333 9.32L7.33333 11.0067L9.4 8.34667C9.53333 8.17333 9.8 8.17333 9.93333 8.35333L12.2733 11.4733C12.44 11.6933 12.28 12.0067 12.0067 12.0067H4.01333C3.73333 12.0067 3.58 11.6867 3.75333 11.4667L5.41333 9.33333C5.54 9.16 5.79333 9.15333 5.93333 9.32Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInsertPhoto }

import React, { FC } from 'react'

const IconSignalCellular4Bar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.94 14.6666H13.3333C14.0667 14.6666 14.6667 14.0666 14.6667 13.3333V2.93997C14.6667 2.34664 13.9467 2.04664 13.5267 2.46664L2.47333 13.5266C2.05333 13.9466 2.34667 14.6666 2.94 14.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellular4Bar }

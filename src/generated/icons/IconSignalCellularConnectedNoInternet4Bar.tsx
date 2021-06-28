import React, { FC } from 'react'

const IconSignalCellularConnectedNoInternet4Bar: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12C14.3667 12 14.6667 11.7 14.6667 11.3333V7.3333C14.6667 6.96664 14.3667 6.66664 14 6.66664C13.6333 6.66664 13.3333 6.96664 13.3333 7.3333V11.3333C13.3333 11.7 13.6333 12 14 12ZM13.3333 14.6666H14.6667V13.3333H13.3333V14.6666ZM2.94 14.6666H12V7.3333C12 6.22664 12.8933 5.3333 14 5.3333H14.6667V2.93997C14.6667 2.34664 13.9467 2.04664 13.5267 2.46664L2.47333 13.5266C2.05333 13.9466 2.34667 14.6666 2.94 14.6666Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSignalCellularConnectedNoInternet4Bar }

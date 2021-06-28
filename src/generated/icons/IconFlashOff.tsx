import React, { FC } from 'react'

const IconFlashOff: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7467 7.66665C11.0067 7.21998 10.6867 6.66665 10.1733 6.66665H8.92666L10.4467 8.18665L10.7467 7.66665ZM10.8533 2.29998C11.0733 1.85331 10.7533 1.33331 10.2533 1.33331H5.33333C4.96666 1.33331 4.66666 1.63331 4.66666 1.99998V2.40665L8.75333 6.49331L10.8533 2.29998ZM12.2933 11.92L2.74666 2.37331C2.48666 2.11331 2.06666 2.11331 1.80666 2.37331C1.54666 2.63331 1.54666 3.05331 1.80666 3.31331L4.66666 6.17998V7.99998C4.66666 8.36665 4.96666 8.66665 5.33333 8.66665H6.66666V13.4333C6.66666 13.7733 7.11333 13.8933 7.28666 13.6L9.05333 10.5666L11.3467 12.86C11.6067 13.12 12.0267 13.12 12.2867 12.86C12.5533 12.6 12.5533 12.18 12.2933 11.92Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFlashOff }

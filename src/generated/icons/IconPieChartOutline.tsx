import React, { FC } from 'react'

const IconPieChartOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33333C4.33333 1.33333 1.33333 4.33333 1.33333 8C1.33333 11.6667 4.33333 14.6667 8 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8C14.6667 4.33333 11.6667 1.33333 8 1.33333ZM8.66666 2.71333C11.0733 3.01333 12.9867 4.93333 13.2867 7.33333H9.33333C8.96666 7.33333 8.66666 7.03333 8.66666 6.66666V2.71333ZM2.66666 8C2.66666 5.29333 4.71333 3.04 7.33333 2.71333V13.2933C4.71333 12.96 2.66666 10.7067 2.66666 8ZM8.66666 13.2867V9.33333C8.66666 8.96666 8.96666 8.66666 9.33333 8.66666H13.2867C12.9867 11.0733 11.0733 12.9867 8.66666 13.2867Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPieChartOutline }

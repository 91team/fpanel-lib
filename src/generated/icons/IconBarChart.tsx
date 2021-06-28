import React, { FC } from 'react'

const IconBarChart: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.26668 6.13331H4.40001C4.91334 6.13331 5.33334 6.55331 5.33334 7.06665V11.7333C5.33334 12.2466 4.91334 12.6666 4.40001 12.6666H4.26668C3.75334 12.6666 3.33334 12.2466 3.33334 11.7333V7.06665C3.33334 6.55331 3.75334 6.13331 4.26668 6.13331ZM8.00001 3.33331C8.51334 3.33331 8.93334 3.75331 8.93334 4.26665V11.7333C8.93334 12.2466 8.51334 12.6666 8.00001 12.6666C7.48668 12.6666 7.06668 12.2466 7.06668 11.7333V4.26665C7.06668 3.75331 7.48668 3.33331 8.00001 3.33331ZM11.7333 8.66665C12.2467 8.66665 12.6667 9.08665 12.6667 9.59998V11.7333C12.6667 12.2466 12.2467 12.6666 11.7333 12.6666C11.22 12.6666 10.8 12.2466 10.8 11.7333V9.59998C10.8 9.08665 11.22 8.66665 11.7333 8.66665Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconBarChart }

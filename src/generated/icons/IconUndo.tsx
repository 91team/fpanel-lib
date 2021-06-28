import React, { FC } from 'react'

const IconUndo: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33334 5.33331C6.56668 5.33331 4.96668 5.99331 3.73334 7.06665L2.47334 5.80665C2.05334 5.38665 1.33334 5.67998 1.33334 6.27331V9.99998C1.33334 10.3666 1.63334 10.6666 2.00001 10.6666H5.72668C6.32001 10.6666 6.62001 9.94665 6.20001 9.52665L4.92668 8.25331C5.85334 7.47998 7.03334 6.99998 8.34001 6.99998C10.4467 6.99998 12.2667 8.22665 13.1333 9.99998C13.3133 10.3733 13.74 10.56 14.1333 10.4266C14.6067 10.2733 14.8467 9.73331 14.6333 9.27998C13.4867 6.94665 11.1 5.33331 8.33334 5.33331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconUndo }

import React, { FC } from 'react'

const IconInvertColors: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.22667 5.28675C2.14667 7.36675 2.14667 10.7467 4.22667 12.8267C5.26667 13.8667 6.63334 14.3867 8 14.3867C9.36667 14.3867 10.7333 13.8667 11.7733 12.8267C13.8533 10.7467 13.8533 7.36675 11.7733 5.28675L8.47334 1.98675C8.21334 1.72675 7.79334 1.72675 7.53334 1.98675L4.22667 5.28675ZM8 13.0601C6.93334 13.0601 5.92667 12.6467 5.17334 11.8867C4.41334 11.1267 4 10.1267 4 9.06008C4 7.99341 4.41334 6.98675 5.17334 6.23341L8 3.40008V13.0601Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconInvertColors }

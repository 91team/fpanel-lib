import React, { FC } from 'react'

const IconChevronRight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.19334 4.47331C5.93334 4.73331 5.93334 5.15331 6.19334 5.41331L8.78 7.99997L6.19334 10.5866C5.93334 10.8466 5.93334 11.2666 6.19334 11.5266C6.45334 11.7866 6.87334 11.7866 7.13334 11.5266L10.1933 8.46664C10.4533 8.20664 10.4533 7.78664 10.1933 7.52664L7.13334 4.46664C6.88 4.21331 6.45334 4.21331 6.19334 4.47331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconChevronRight }

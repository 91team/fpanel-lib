import React, { FC } from 'react'

const IconNavigateNext: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20666 4.47331C5.94666 4.73331 5.94666 5.15331 6.20666 5.41331L8.79332 7.99997L6.20666 10.5866C5.94666 10.8466 5.94666 11.2666 6.20666 11.5266C6.46666 11.7866 6.88666 11.7866 7.14666 11.5266L10.2067 8.46664C10.4667 8.20664 10.4667 7.78664 10.2067 7.52664L7.14666 4.46664C6.89332 4.21331 6.46666 4.21331 6.20666 4.47331Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNavigateNext }

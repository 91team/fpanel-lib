import React, { FC } from 'react'

const IconTextFormat: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33334 12C3.33334 12.3667 3.63334 12.6667 4.00001 12.6667H12C12.3667 12.6667 12.6667 12.3667 12.6667 12C12.6667 11.6334 12.3667 11.3334 12 11.3334H4.00001C3.63334 11.3334 3.33334 11.6334 3.33334 12ZM6.33334 8.53335H9.66668L10.1067 9.60002C10.2067 9.84002 10.44 10 10.7 10C11.16 10 11.4667 9.52669 11.2867 9.10669L8.70001 3.12669C8.58001 2.84669 8.30668 2.66669 8.00001 2.66669C7.69334 2.66669 7.42001 2.84669 7.30001 3.12669L4.71334 9.10669C4.53334 9.52669 4.84668 10 5.30668 10C5.56668 10 5.80001 9.84002 5.90001 9.60002L6.33334 8.53335ZM8.00001 3.98669L9.24668 7.33335H6.75334L8.00001 3.98669Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTextFormat }

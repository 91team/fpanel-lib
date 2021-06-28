import React, { FC } from 'react'

const IconPlayArrow: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 4.54675V11.4534C5.33333 11.9801 5.91333 12.3001 6.35999 12.0134L11.7867 8.56009C12.2 8.30009 12.2 7.70009 11.7867 7.43342L6.35999 3.98675C5.91333 3.70009 5.33333 4.02009 5.33333 4.54675Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPlayArrow }

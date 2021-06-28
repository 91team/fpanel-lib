import React, { FC } from 'react'

const IconLocalPhone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.82 10.1734L11.1267 9.98005C10.72 9.93338 10.32 10.0734 10.0333 10.36L8.80666 11.5867C6.92 10.6267 5.37333 9.08671 4.41333 7.19338L5.64666 5.96005C5.93333 5.67338 6.07333 5.27338 6.02666 4.86671L5.83333 3.18671C5.75333 2.51338 5.18666 2.00671 4.50666 2.00671H3.35333C2.6 2.00671 1.97333 2.63338 2.02 3.38671C2.37333 9.08005 6.92666 13.6267 12.6133 13.98C13.3667 14.0267 13.9933 13.4 13.9933 12.6467V11.4934C14 10.82 13.4933 10.2534 12.82 10.1734Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocalPhone }

import React, { FC } from 'react'

const IconNature: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66667 10.7467C10.9133 10.48 12.6733 8.62001 12.7733 6.32001C12.8867 3.74001 10.76 1.48668 8.18 1.44668C5.56667 1.41335 3.44667 3.51335 3.44667 6.11335C3.44667 8.42668 5.12667 10.34 7.33334 10.7067V13.3333H4C3.63334 13.3333 3.33334 13.6333 3.33334 14C3.33334 14.3667 3.63334 14.6667 4 14.6667H12C12.3667 14.6667 12.6667 14.3667 12.6667 14C12.6667 13.6333 12.3667 13.3333 12 13.3333H8.66667V10.7467Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconNature }

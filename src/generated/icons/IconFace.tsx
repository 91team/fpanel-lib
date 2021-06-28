import React, { FC } from 'react'

const IconFace: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 7.83325C5.54001 7.83325 5.16668 8.20659 5.16668 8.66659C5.16668 9.12659 5.54001 9.49992 6.00001 9.49992C6.46001 9.49992 6.83334 9.12659 6.83334 8.66659C6.83334 8.20659 6.46001 7.83325 6.00001 7.83325ZM10 7.83325C9.54001 7.83325 9.16668 8.20659 9.16668 8.66659C9.16668 9.12659 9.54001 9.49992 10 9.49992C10.46 9.49992 10.8333 9.12659 10.8333 8.66659C10.8333 8.20659 10.46 7.83325 10 7.83325ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 7.80659 2.68001 7.61325 2.70001 7.42659C4.27334 6.72659 5.52001 5.43992 6.17334 3.84659C7.38001 5.55325 9.36668 6.66659 11.6133 6.66659C12.1333 6.66659 12.6333 6.60659 13.1133 6.49325C13.2533 6.96659 13.3333 7.47325 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFace }

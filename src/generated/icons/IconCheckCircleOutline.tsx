import React, { FC } from 'react'

const IconCheckCircleOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33325C4.32 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM8 13.3333C5.06 13.3333 2.66667 10.9399 2.66667 7.99992C2.66667 5.05992 5.06 2.66659 8 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8 13.3333ZM10.5867 5.52659L6.66667 9.44659L5.41334 8.19325C5.15334 7.93325 4.73334 7.93325 4.47334 8.19325C4.21334 8.45325 4.21334 8.87325 4.47334 9.13325L6.2 10.8599C6.46 11.1199 6.88 11.1199 7.14 10.8599L11.5333 6.46659C11.7933 6.20659 11.7933 5.78659 11.5333 5.52659C11.2733 5.26659 10.8467 5.26659 10.5867 5.52659Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCheckCircleOutline }

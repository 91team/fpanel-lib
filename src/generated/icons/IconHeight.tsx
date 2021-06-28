import React, { FC } from 'react'

const IconHeight: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66666 4.65999H9.86C10.16 4.65999 10.3067 4.29999 10.0933 4.09332L8.23333 2.23999C8.1 2.11332 7.89333 2.11332 7.76 2.23999L5.90666 4.09332C5.69333 4.29999 5.84 4.65999 6.14 4.65999H7.33333V11.34H6.14C5.84 11.34 5.69333 11.7 5.90666 11.9067L7.76666 13.76C7.9 13.8867 8.10666 13.8867 8.24 13.76L10.1 11.9067C10.3133 11.7 10.16 11.34 9.86666 11.34H8.66666V4.65999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconHeight }

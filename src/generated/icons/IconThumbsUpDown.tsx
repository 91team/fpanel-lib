import React, { FC } from 'react'

const IconThumbsUpDown: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M6.70667 3.33335H3.88L4.32 1.21335C4.37333 0.966688 4.29333 0.713354 4.12 0.533354C3.82667 0.240021 3.35333 0.240021 3.06667 0.533354L0.4 3.20002C0.14 3.44669 0 3.78669 0 4.14002V8.00002C0 8.73335 0.6 9.33335 1.33333 9.33335H5.28C5.81333 9.33335 6.29333 9.01335 6.50667 8.52669L7.93333 5.19335C8.30667 4.31335 7.66 3.33335 6.70667 3.33335ZM14.6667 6.66669H10.72C10.1867 6.66669 9.70667 6.98669 9.49333 7.47335L8.06667 10.8067C7.69333 11.6867 8.33333 12.6667 9.29333 12.6667H12.12L11.68 14.7867C11.6267 15.0334 11.7067 15.2867 11.88 15.4667C12.1733 15.76 12.6467 15.76 12.9333 15.4667L15.6 12.8C15.8533 12.5467 15.9933 12.2134 15.9933 11.86V8.00002C16 7.26669 15.4 6.66669 14.6667 6.66669Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconThumbsUpDown }

import React, { FC } from 'react'

const IconLocationCity: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7.33324V3.88657C10 3.53324 9.86 3.19324 9.60667 2.94657L8.46667 1.80657C8.20667 1.54657 7.78667 1.54657 7.52667 1.80657L6.39333 2.93991C6.14 3.19324 6 3.53324 6 3.88657V4.66657H3.33333C2.6 4.66657 2 5.26657 2 5.99991V12.6666C2 13.3999 2.6 13.9999 3.33333 13.9999H12.6667C13.4 13.9999 14 13.3999 14 12.6666V8.66657C14 7.93324 13.4 7.33324 12.6667 7.33324H10ZM4.66667 12.6666H3.33333V11.3332H4.66667V12.6666ZM4.66667 9.99991H3.33333V8.66657H4.66667V9.99991ZM4.66667 7.33324H3.33333V5.99991H4.66667V7.33324ZM8.66667 12.6666H7.33333V11.3332H8.66667V12.6666ZM8.66667 9.99991H7.33333V8.66657H8.66667V9.99991ZM8.66667 7.33324H7.33333V5.99991H8.66667V7.33324ZM8.66667 4.66657H7.33333V3.33324H8.66667V4.66657ZM12.6667 12.6666H11.3333V11.3332H12.6667V12.6666ZM12.6667 9.99991H11.3333V8.66657H12.6667V9.99991Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLocationCity }

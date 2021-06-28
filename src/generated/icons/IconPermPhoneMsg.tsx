import React, { FC } from 'react'

const IconPermPhoneMsg: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2H8.66666C8.3 2 8 2.3 8 2.66667V8.66667L10 6.66667H13.3333C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2ZM12.82 10.1733L11.1267 9.98C10.72 9.93333 10.32 10.0733 10.0333 10.36L8.80666 11.5867C6.92 10.6267 5.37333 9.08667 4.41333 7.19333L5.64666 5.96C5.93333 5.67333 6.07333 5.27333 6.02666 4.86667L5.83333 3.18667C5.75333 2.51333 5.18666 2.00667 4.50666 2.00667H3.35333C2.6 2.00667 1.97333 2.63333 2.02 3.38667C2.37333 9.08 6.92666 13.6267 12.6133 13.98C13.3667 14.0267 13.9933 13.4 13.9933 12.6467V11.4933C14 10.82 13.4933 10.2533 12.82 10.1733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPermPhoneMsg }

import React, { FC } from 'react'

const IconCall: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.82 10.1733L11.1267 9.97999C10.72 9.93332 10.32 10.0733 10.0333 10.36L8.80666 11.5867C6.92 10.6267 5.37333 9.08665 4.41333 7.19332L5.64666 5.95999C5.93333 5.67332 6.07333 5.27332 6.02666 4.86665L5.83333 3.18665C5.75333 2.51332 5.18666 2.00665 4.50666 2.00665H3.35333C2.6 2.00665 1.97333 2.63332 2.02 3.38665C2.37333 9.07999 6.92666 13.6267 12.6133 13.98C13.3667 14.0267 13.9933 13.4 13.9933 12.6467V11.4933C14 10.82 13.4933 10.2533 12.82 10.1733Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconCall }

import React, { FC } from 'react'

const IconZoomOut: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 9.33338H9.80666L9.61999 9.15338C10.42 8.22005 10.8333 6.94672 10.6067 5.59338C10.2933 3.74005 8.74666 2.26005 6.87999 2.03338C4.05999 1.68672 1.68666 4.06005 2.03332 6.88005C2.25999 8.74672 3.73999 10.2934 5.59332 10.6067C6.94666 10.8334 8.21999 10.4201 9.15332 9.62005L9.33332 9.80672V10.3334L12.1733 13.1667C12.4467 13.4401 12.8867 13.4401 13.16 13.1667L13.1667 13.1601C13.44 12.8867 13.44 12.4467 13.1667 12.1734L10.3333 9.33338ZM6.33332 9.33338C4.67332 9.33338 3.33332 7.99338 3.33332 6.33338C3.33332 4.67338 4.67332 3.33338 6.33332 3.33338C7.99332 3.33338 9.33332 4.67338 9.33332 6.33338C9.33332 7.99338 7.99332 9.33338 6.33332 9.33338ZM4.99999 6.00005H7.66666C7.85332 6.00005 7.99999 6.14672 7.99999 6.33338C7.99999 6.52005 7.85332 6.66672 7.66666 6.66672H4.99999C4.81332 6.66672 4.66666 6.52005 4.66666 6.33338C4.66666 6.14672 4.81332 6.00005 4.99999 6.00005Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconZoomOut }

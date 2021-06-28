import React, { FC } from 'react'

const IconTexture: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0534 2.05333L2.10003 13.0067C2.16003 13.2333 2.28003 13.44 2.44003 13.6067C2.60669 13.7667 2.81336 13.8867 3.04003 13.9467L14 2.99333C13.8734 2.53333 13.5134 2.17333 13.0534 2.05333ZM7.96669 2L2.04669 7.92V9.80667L9.85336 2H7.96669ZM3.38003 2C2.64669 2 2.04669 2.6 2.04669 3.33333V4.66667L4.71336 2H3.38003ZM12.7134 14C13.08 14 13.4134 13.8533 13.6534 13.6067C13.9 13.3667 14.0467 13.0333 14.0467 12.6667V11.3333L11.38 14H12.7134ZM6.24003 14H8.12669L14.0467 8.08V6.19333L6.24003 14Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTexture }

import React, { FC } from 'react'

const IconPhonelinkErase: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33336 5.13335C8.14669 4.94669 7.85336 4.94669 7.66669 5.13335L5.33336 7.46669L3.00003 5.13335C2.81336 4.94669 2.52003 4.94669 2.33336 5.13335C2.14669 5.32002 2.14669 5.61335 2.33336 5.80002L4.66669 8.13335L2.33336 10.4667C2.14669 10.6534 2.14669 10.9467 2.33336 11.1334C2.52003 11.32 2.81336 11.32 3.00003 11.1334L5.33336 8.80002L7.66669 11.1334C7.85336 11.32 8.14669 11.32 8.33336 11.1334C8.52003 10.9467 8.52003 10.6534 8.33336 10.4667L6.00003 8.13335L8.33336 5.80002C8.52003 5.61335 8.52003 5.32002 8.33336 5.13335ZM12.6667 0.666687H6.00003C5.26669 0.666687 4.66669 1.26669 4.66669 2.00002V3.33335C4.66669 3.70002 4.96669 4.00002 5.33336 4.00002C5.70003 4.00002 6.00003 3.70002 6.00003 3.33335V2.66669H12.6667V13.3334H6.00003V12.6667C6.00003 12.3 5.70003 12 5.33336 12C4.96669 12 4.66669 12.3 4.66669 12.6667V14C4.66669 14.7334 5.26669 15.3334 6.00003 15.3334H12.6667C13.4 15.3334 14 14.7334 14 14V2.00002C14 1.26669 13.4 0.666687 12.6667 0.666687Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPhonelinkErase }

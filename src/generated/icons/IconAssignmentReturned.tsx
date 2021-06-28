import React, { FC } from 'react'

const IconAssignmentReturned: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2.00008H9.88C9.6 1.22675 8.86667 0.666748 8 0.666748C7.13333 0.666748 6.4 1.22675 6.12 2.00008H3.33333C2.6 2.00008 2 2.60008 2 3.33341V12.6667C2 13.4001 2.6 14.0001 3.33333 14.0001H12.6667C13.4 14.0001 14 13.4001 14 12.6667V3.33341C14 2.60008 13.4 2.00008 12.6667 2.00008ZM8 2.00008C8.36667 2.00008 8.66667 2.30008 8.66667 2.66675C8.66667 3.03341 8.36667 3.33341 8 3.33341C7.63333 3.33341 7.33333 3.03341 7.33333 2.66675C7.33333 2.30008 7.63333 2.00008 8 2.00008ZM7.76667 11.7667L4.66667 8.66675H6.66667V6.00008H9.33333V8.66675H11.3333L8.23333 11.7667C8.10667 11.8934 7.89333 11.8934 7.76667 11.7667Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAssignmentReturned }

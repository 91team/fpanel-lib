import React, { FC } from 'react'

const IconAssignment: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2.00008H9.88C9.6 1.22675 8.86667 0.666748 8 0.666748C7.13333 0.666748 6.4 1.22675 6.12 2.00008H3.33333C2.6 2.00008 2 2.60008 2 3.33341V12.6667C2 13.4001 2.6 14.0001 3.33333 14.0001H12.6667C13.4 14.0001 14 13.4001 14 12.6667V3.33341C14 2.60008 13.4 2.00008 12.6667 2.00008ZM8 2.00008C8.36667 2.00008 8.66667 2.30008 8.66667 2.66675C8.66667 3.03341 8.36667 3.33341 8 3.33341C7.63333 3.33341 7.33333 3.03341 7.33333 2.66675C7.33333 2.30008 7.63333 2.00008 8 2.00008ZM8.66667 11.3334H5.33333C4.96667 11.3334 4.66667 11.0334 4.66667 10.6667C4.66667 10.3001 4.96667 10.0001 5.33333 10.0001H8.66667C9.03333 10.0001 9.33333 10.3001 9.33333 10.6667C9.33333 11.0334 9.03333 11.3334 8.66667 11.3334ZM10.6667 8.66675H5.33333C4.96667 8.66675 4.66667 8.36675 4.66667 8.00008C4.66667 7.63341 4.96667 7.33341 5.33333 7.33341H10.6667C11.0333 7.33341 11.3333 7.63341 11.3333 8.00008C11.3333 8.36675 11.0333 8.66675 10.6667 8.66675ZM10.6667 6.00008H5.33333C4.96667 6.00008 4.66667 5.70008 4.66667 5.33341C4.66667 4.96675 4.96667 4.66675 5.33333 4.66675H10.6667C11.0333 4.66675 11.3333 4.96675 11.3333 5.33341C11.3333 5.70008 11.0333 6.00008 10.6667 6.00008Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconAssignment }

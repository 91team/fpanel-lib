import React, { FC } from 'react'

const IconLooks3: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33999C2.60665 2 2.00665 2.6 2.00665 3.33333V12.6667C2.00665 13.4 2.60665 14 3.33999 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM10.0067 7C10.0067 7.55333 9.55999 8 9.00665 8C9.55999 8 10.0067 8.44667 10.0067 9V10C10.0067 10.74 9.40665 11.3333 8.67332 11.3333H6.66665C6.29999 11.3333 5.99999 11.0333 5.99999 10.6667C5.99999 10.3 6.29999 10 6.66665 10H8.67332L8.66665 8.66667H7.99999C7.63332 8.66667 7.33332 8.36667 7.33332 8C7.33332 7.63333 7.63332 7.33333 7.99999 7.33333H8.66665L8.67332 6H6.66665C6.29999 6 6.00665 5.7 6.00665 5.33333C6.00665 4.96667 6.29999 4.66667 6.66665 4.66667H8.67332C9.40665 4.66667 10.0067 5.26667 10.0067 6V7Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLooks3 }

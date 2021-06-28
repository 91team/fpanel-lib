import React, { FC } from 'react'

const IconLuggage: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 3.99992H9.99998V1.99992C9.99998 1.63325 9.69998 1.33325 9.33331 1.33325H6.66665C6.29998 1.33325 5.99998 1.63325 5.99998 1.99992V3.99992H4.66665C3.93331 3.99992 3.33331 4.59992 3.33331 5.33325V12.6666C3.33331 13.3999 3.93331 13.9999 4.66665 13.9999C4.66665 14.3666 4.96665 14.6666 5.33331 14.6666C5.69998 14.6666 5.99998 14.3666 5.99998 13.9999H9.99998C9.99998 14.3666 10.3 14.6666 10.6666 14.6666C11.0333 14.6666 11.3333 14.3666 11.3333 13.9999C12.0666 13.9999 12.6666 13.3999 12.6666 12.6666V5.33325C12.6666 4.59992 12.0666 3.99992 11.3333 3.99992ZM5.83331 11.9999C5.55998 11.9999 5.33331 11.7733 5.33331 11.4999V6.49992C5.33331 6.22659 5.55998 5.99992 5.83331 5.99992C6.10665 5.99992 6.33331 6.22659 6.33331 6.49992V11.4999C6.33331 11.7733 6.10665 11.9999 5.83331 11.9999ZM7.99998 11.9999C7.72665 11.9999 7.49998 11.7733 7.49998 11.4999V6.49992C7.49998 6.22659 7.72665 5.99992 7.99998 5.99992C8.27331 5.99992 8.49998 6.22659 8.49998 6.49992V11.4999C8.49998 11.7733 8.27331 11.9999 7.99998 11.9999ZM8.99998 3.99992H6.99998V2.33325H8.99998V3.99992ZM10.1666 11.9999C9.89331 11.9999 9.66665 11.7733 9.66665 11.4999V6.49992C9.66665 6.22659 9.89331 5.99992 10.1666 5.99992C10.44 5.99992 10.6666 6.22659 10.6666 6.49992V11.4999C10.6666 11.7733 10.44 11.9999 10.1666 11.9999Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconLuggage }

import React, { FC } from 'react'

const IconSportsCricket: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0333 8.53981L4.37332 2.87981C4.11332 2.61981 3.69332 2.61981 3.43332 2.87981L1.54665 4.76648C1.28665 5.02648 1.28665 5.44648 1.54665 5.70648L7.20666 11.3665C7.46665 11.6265 7.88665 11.6265 8.14666 11.3665L10.0333 9.47981C10.2933 9.21981 10.2933 8.79981 10.0333 8.53981Z" fill="currentColor"/>
<path d="M9.56 11.8397L11.9133 14.1931C12.1733 14.4531 12.6 14.4531 12.86 14.1931C13.12 13.9331 13.12 13.5064 12.86 13.2464L10.5067 10.8931L9.56 11.8397Z" fill="currentColor"/>
<path d="M12.3333 5.99992C13.622 5.99992 14.6667 4.95525 14.6667 3.66659C14.6667 2.37792 13.622 1.33325 12.3333 1.33325C11.0447 1.33325 10 2.37792 10 3.66659C10 4.95525 11.0447 5.99992 12.3333 5.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsCricket }

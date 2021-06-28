import React, { FC } from 'react'

const IconSportsTennis: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0133 1.66005C11.4533 0.100053 8.59999 0.413386 6.64666 2.36672C5.57999 3.43339 4.96665 4.94672 4.95332 6.00672C4.93999 7.06005 5.12665 8.60005 4.05332 9.67339L1.69332 12.0267C1.43332 12.2867 1.43332 12.7067 1.69332 12.9734C1.95332 13.2334 2.37332 13.2334 2.63999 12.9734L4.99332 10.6134C6.06665 9.54005 7.60665 9.72672 8.65999 9.71339C9.71332 9.70005 11.2333 9.08672 12.3 8.02005C14.2533 6.07339 14.5733 3.22005 13.0133 1.66005ZM6.87999 7.78672C5.85999 6.76672 6.17999 4.71339 7.58665 3.30672C8.99332 1.90005 11.04 1.58005 12.0667 2.60005C13.0867 3.62005 12.7667 5.67339 11.36 7.08005C9.95332 8.48672 7.90665 8.80672 6.87999 7.78672Z" fill="currentColor"/>
<path d="M12 11.3333C12.3533 11.3333 12.6933 11.4733 12.94 11.7267C13.46 12.2467 13.46 13.0933 12.94 13.6133C12.6933 13.86 12.3533 14 12 14C11.6466 14 11.3066 13.86 11.06 13.6067C10.54 13.0867 10.54 12.24 11.06 11.72C11.3066 11.4733 11.6466 11.3333 12 11.3333ZM12 10C11.32 10 10.6333 10.26 10.1133 10.78C9.07331 11.82 9.07331 13.5067 10.1133 14.5533C10.6333 15.0733 11.32 15.3333 12 15.3333C12.68 15.3333 13.3666 15.0733 13.8866 14.5533C14.9266 13.5133 14.9266 11.8267 13.8866 10.78C13.3666 10.26 12.68 10 12 10Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconSportsTennis }

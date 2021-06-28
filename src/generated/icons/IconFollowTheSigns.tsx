import React, { FC } from 'react'

const IconFollowTheSigns: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33333 3.66667C7.06666 3.66667 7.66666 3.06667 7.66666 2.33333C7.66666 1.6 7.06666 1 6.33333 1C5.6 1 4.99999 1.6 4.99999 2.33333C4.99999 3.06667 5.6 3.66667 6.33333 3.66667ZM3.83333 5.93333L2.15333 14.54C2.07333 14.9533 2.38666 15.3333 2.80666 15.3333H2.86666C3.18 15.3333 3.45333 15.1133 3.52 14.8067L4.56666 10L6 11.3333V14.6667C6 15.0333 6.29999 15.3333 6.66666 15.3333C7.03333 15.3333 7.33333 15.0333 7.33333 14.6667V10.5733C7.33333 10.3933 7.25999 10.2267 7.14 10.1L5.96666 8.93333L6.36666 6.93333C7.08 7.81333 8.08666 8.42 9.24 8.60667C9.63999 8.67333 10 8.34667 10 7.94C10 7.61333 9.76 7.34 9.43999 7.28667C8.44666 7.12 7.60666 6.52 7.09999 5.7L6.46666 4.63333C6.23333 4.23333 5.79999 4 5.33333 4C5.16666 4 4.99999 4.03333 4.83333 4.1L1.74666 5.36667C1.49999 5.46667 1.33333 5.71333 1.33333 5.98V8C1.33333 8.36667 1.63333 8.66667 1.99999 8.66667C2.36666 8.66667 2.66666 8.36667 2.66666 8V6.43333L3.83333 5.93333ZM14 1.33333H9.33333C8.96666 1.33333 8.66666 1.63333 8.66666 2V5.33333C8.66666 5.7 8.96666 6 9.33333 6H11.1667V14.8333C11.1667 15.1067 11.3933 15.3333 11.6667 15.3333C11.94 15.3333 12.1667 15.1067 12.1667 14.8333V6H14C14.3667 6 14.6667 5.7 14.6667 5.33333V2C14.6667 1.63333 14.3667 1.33333 14 1.33333ZM13.4333 3.9L12.58 4.76C12.3733 4.97333 12.0133 4.82 12.0133 4.52667V4.16667H10.1733C9.89999 4.16667 9.67333 3.94 9.67333 3.66667C9.67333 3.39333 9.89999 3.16667 10.1733 3.16667H12.0133V2.80667C12.0133 2.50667 12.3733 2.36 12.58 2.57333L13.4333 3.43333C13.56 3.56 13.56 3.77333 13.4333 3.9Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconFollowTheSigns }

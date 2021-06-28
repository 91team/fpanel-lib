import React, { FC } from 'react'

const IconContactPhone: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 2H1.33333C0.6 2 0 2.6 0 3.33333V12.6667C0 13.4 0.6 14 1.33333 14H14.6667C15.4 14 15.9933 13.4 15.9933 12.6667L16 3.33333C16 2.6 15.4 2 14.6667 2ZM5.33333 4C6.44 4 7.33333 4.89333 7.33333 6C7.33333 7.10667 6.44 8 5.33333 8C4.22667 8 3.33333 7.10667 3.33333 6C3.33333 4.89333 4.22667 4 5.33333 4ZM9.33333 12H1.33333V11.3333C1.33333 10 4 9.26667 5.33333 9.26667C6.66667 9.26667 9.33333 10 9.33333 11.3333V12ZM11.9 9.33333H12.8267C12.9333 9.33333 13.0267 9.38 13.0933 9.46667L13.8267 10.4333C13.9267 10.5667 13.9133 10.7533 13.7933 10.8667L12.8867 11.7733C12.7667 11.8933 12.5667 11.9067 12.44 11.8C11.6867 11.16 11.1267 10.3 10.8533 9.32667C10.7333 8.90667 10.6667 8.46 10.6667 8C10.6667 7.54 10.7333 7.09333 10.8533 6.66667C11.1267 5.68667 11.6867 4.83333 12.44 4.19333C12.5733 4.08 12.7667 4.1 12.8867 4.22L13.7933 5.12667C13.9133 5.24667 13.9267 5.43333 13.8267 5.56L13.0933 6.52667C13.0333 6.61333 12.9333 6.66 12.8267 6.66H11.9C11.7533 7.08 11.6667 7.52667 11.6667 7.99333C11.6667 8.46 11.7533 8.91333 11.9 9.33333Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconContactPhone }

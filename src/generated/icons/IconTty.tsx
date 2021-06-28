import React, { FC } from 'react'

const IconTty: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99999 2.66667C10.3667 2.66667 10.6667 2.96667 10.6667 3.33333C10.6667 3.7 10.3667 4 9.99999 4C9.63332 4 9.33332 3.7 9.33332 3.33333C9.33332 2.96667 9.63332 2.66667 9.99999 2.66667ZM9.33332 4.66667C9.69999 4.66667 9.99999 4.96667 9.99999 5.33333C9.99999 5.7 9.69999 6 9.33332 6C8.96666 6 8.66666 5.7 8.66666 5.33333C8.66666 4.96667 8.96666 4.66667 9.33332 4.66667ZM7.99999 2.66667C8.36666 2.66667 8.66666 2.96667 8.66666 3.33333C8.66666 3.7 8.36666 4 7.99999 4C7.63332 4 7.33332 3.7 7.33332 3.33333C7.33332 2.96667 7.63332 2.66667 7.99999 2.66667ZM11.3333 6C10.9667 6 10.6667 5.7 10.6667 5.33333C10.6667 4.96667 10.9667 4.66667 11.3333 4.66667C11.7 4.66667 12 4.96667 12 5.33333C12 5.7 11.7 6 11.3333 6ZM12 4C11.6333 4 11.3333 3.7 11.3333 3.33333C11.3333 2.96667 11.6333 2.66667 12 2.66667C12.3667 2.66667 12.6667 2.96667 12.6667 3.33333C12.6667 3.7 12.3667 4 12 4ZM13.3333 6C12.9667 6 12.6667 5.7 12.6667 5.33333C12.6667 4.96667 12.9667 4.66667 13.3333 4.66667C13.7 4.66667 14 4.96667 14 5.33333C14 5.7 13.7 6 13.3333 6ZM14 4C13.6333 4 13.3333 3.7 13.3333 3.33333C13.3333 2.96667 13.6333 2.66667 14 2.66667C14.3667 2.66667 14.6667 2.96667 14.6667 3.33333C14.6667 3.7 14.3667 4 14 4ZM9.74666 9.58667L8.06666 11.2667C6.39999 10.3133 5.01999 8.93333 4.06666 7.26667L5.74666 5.58667C5.90666 5.42667 5.97332 5.2 5.93332 4.98667L5.43999 2.53333C5.37999 2.22667 5.10666 2 4.78666 2H2.01999C1.64666 2 1.33332 2.31333 1.35332 2.68667C1.46666 4.61333 2.03332 6.42 2.95332 8C4.00666 9.82 5.51999 11.3267 7.33332 12.38C8.91332 13.2933 10.72 13.8667 12.6467 13.98C13.02 14 13.3333 13.6867 13.3333 13.3133V10.5467C13.3333 10.2267 13.1067 9.95333 12.8 9.89333L10.3533 9.40667C10.1333 9.36 9.90666 9.42667 9.74666 9.58667ZM9.99999 6.66667C10.3667 6.66667 10.6667 6.96667 10.6667 7.33333C10.6667 7.7 10.3667 8 9.99999 8C9.63332 8 9.33332 7.7 9.33332 7.33333C9.33332 6.96667 9.63332 6.66667 9.99999 6.66667ZM7.99999 6.66667C8.36666 6.66667 8.66666 6.96667 8.66666 7.33333C8.66666 7.7 8.36666 8 7.99999 8C7.63332 8 7.33332 7.7 7.33332 7.33333C7.33332 6.96667 7.63332 6.66667 7.99999 6.66667ZM12 8C11.6333 8 11.3333 7.7 11.3333 7.33333C11.3333 6.96667 11.6333 6.66667 12 6.66667C12.3667 6.66667 12.6667 6.96667 12.6667 7.33333C12.6667 7.7 12.3667 8 12 8ZM14 8C13.6333 8 13.3333 7.7 13.3333 7.33333C13.3333 6.96667 13.6333 6.66667 14 6.66667C14.3667 6.66667 14.6667 6.96667 14.6667 7.33333C14.6667 7.7 14.3667 8 14 8Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconTty }

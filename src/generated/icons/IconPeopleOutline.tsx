import React, { FC } from 'react'

const IconPeopleOutline: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 7.99992C7.28668 7.99992 8.33334 6.95325 8.33334 5.66659C8.33334 4.37992 7.28668 3.33325 6.00001 3.33325C4.71334 3.33325 3.66668 4.37992 3.66668 5.66659C3.66668 6.95325 4.71334 7.99992 6.00001 7.99992ZM6.00001 4.66659C6.55334 4.66659 7.00001 5.11325 7.00001 5.66659C7.00001 6.21992 6.55334 6.66659 6.00001 6.66659C5.44668 6.66659 5.00001 6.21992 5.00001 5.66659C5.00001 5.11325 5.44668 4.66659 6.00001 4.66659ZM6.00001 9.16659C4.44001 9.16659 1.33334 9.94659 1.33334 11.4999V11.9999C1.33334 12.3666 1.63334 12.6666 2.00001 12.6666H10C10.3667 12.6666 10.6667 12.3666 10.6667 11.9999V11.4999C10.6667 9.94659 7.56001 9.16659 6.00001 9.16659ZM2.89334 11.3333C3.45334 10.9466 4.80668 10.4999 6.00001 10.4999C7.19334 10.4999 8.54668 10.9466 9.10668 11.3333H2.89334ZM10.6933 9.20659C11.4667 9.76659 12 10.5133 12 11.4999V12.6666H14C14.3667 12.6666 14.6667 12.3666 14.6667 11.9999V11.4999C14.6667 10.1533 12.3333 9.38659 10.6933 9.20659ZM10 7.99992C11.2867 7.99992 12.3333 6.95325 12.3333 5.66659C12.3333 4.37992 11.2867 3.33325 10 3.33325C9.64001 3.33325 9.30668 3.41992 9.00001 3.56659C9.42001 4.15992 9.66668 4.88659 9.66668 5.66659C9.66668 6.44659 9.42001 7.17325 9.00001 7.76659C9.30668 7.91325 9.64001 7.99992 10 7.99992Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconPeopleOutline }

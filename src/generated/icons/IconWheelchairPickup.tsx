import React, { FC } from 'react'

const IconWheelchairPickup: FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2.66659C3 1.92659 3.59333 1.33325 4.33333 1.33325C5.07333 1.33325 5.66667 1.92659 5.66667 2.66659C5.66667 3.40659 5.07333 3.99992 4.33333 3.99992C3.59333 3.99992 3 3.40659 3 2.66659ZM6.66667 7.29992V5.99992C6.66667 5.26659 6.06667 4.66659 5.33333 4.66659H3.33333C2.6 4.66659 2 5.26659 2 5.99992V9.33325C2 9.69992 2.3 9.99992 2.66667 9.99992H3.33333V13.9999C3.33333 14.3666 3.63333 14.6666 4 14.6666H5.66667V14.5933C4.84 13.7533 4.33333 12.5999 4.33333 11.3333C4.33333 9.61325 5.27333 8.10659 6.66667 7.29992ZM11 11.3333C11 12.4333 10.1 13.3333 9 13.3333C7.9 13.3333 7 12.4333 7 11.3333C7 10.5933 7.40667 9.95992 8 9.61325V8.17325C6.65333 8.59992 5.66667 9.84659 5.66667 11.3333C5.66667 13.1733 7.16 14.6666 9 14.6666C10.84 14.6666 12.3333 13.1733 12.3333 11.3333H11ZM12.6667 9.33325H10V5.99992C10 5.63325 9.7 5.33325 9.33333 5.33325C8.96667 5.33325 8.66667 5.63325 8.66667 5.99992V9.99992C8.66667 10.3666 8.96667 10.6666 9.33333 10.6666H12.3067L13.5867 12.5866C13.7933 12.8933 14.2067 12.9733 14.5133 12.7733C14.82 12.5666 14.9 12.1533 14.7 11.8466L13.2267 9.63325C13.1 9.44659 12.8867 9.33325 12.6667 9.33325Z" fill="currentColor"/>
</svg>
`,
    }}
    style={{ display: 'flex' }}
  />
)

export { IconWheelchairPickup }
